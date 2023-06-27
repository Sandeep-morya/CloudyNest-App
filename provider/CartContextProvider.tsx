import React, {
	createContext,
	useCallback,
	useContext,
	useState,
	PropsWithChildren,
	useEffect,
} from "react";
import { CartItemType, ProductType } from "../types";
import API from "../utlis/api";
import { useAuth } from "./AuthContextProvider";

interface CartProps {
	items: CartItemType[];
	cartPrice: number;
	isLoading: boolean;
	deleteCartItem: (id: string) => Promise<void>;
	updateCartItem: (id: string, count: number) => Promise<void>;
	addToCart: (product: ProductType) => Promise<void>;
}

const CartContext = createContext({} as CartProps);

export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }: PropsWithChildren) => {
	const [isLoading, setIsLoading] = useState(false);
	const [items, setItems] = useState<CartItemType[]>([]);
	const [cartPrice, setCartPrice] = useState(0);
	const { auth } = useAuth();

	const addToCart = useCallback(
		async (product: ProductType) => {
			setIsLoading(true);
			try {
				const { data } = await API.patch(
					"/cart",
					{
						data: {
							id: product._id,
							title: product.title,
							seller: product.seller,
							price: product.price,
							count: 1,
						},
					},
					{ headers: { Authorization: auth } },
				);
				setItems(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		},
		[auth],
	);

	const updateCartItem = useCallback(
		async (id: string, count: number) => {
			setIsLoading(true);
			try {
				const { data } = await API.patch(
					`/cart/${id}`,
					{ count },
					{
						headers: { Authorization: auth },
					},
				);
				setItems(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		},
		[auth],
	);

	const deleteCartItem = useCallback(
		async (id: string) => {
			setIsLoading(true);

			try {
				const { data } = await API.delete(`/cart/${id}`, {
					headers: { Authorization: auth },
				});
				setItems(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		},
		[auth],
	);

	const getCartData = useCallback(async () => {
		if (!auth) {
			setItems([]);
			return;
		}
		setIsLoading(true);

		try {
			const { data } = await API.get("/cart", {
				headers: { Authorization: auth },
			});
			setItems(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	}, [auth]);

	const calculateCartPrice = useCallback(
		(auth: string | null, items: CartItemType[]) => {
			if (!auth) {
				setCartPrice(0);
			} else {
				const total = items.reduce(
					(previousValue, currentValue) =>
						previousValue + currentValue.price * currentValue.count,
					0,
				);
				setCartPrice(total);
			}
		},
		[],
	);

	useEffect(() => {
		calculateCartPrice(auth, items);
	}, [auth, items]);

	useEffect(() => {
		getCartData();
	}, [getCartData]);

	// console.log({ items, cartPrice });

	return (
		<CartContext.Provider
			value={{
				items,
				cartPrice,
				isLoading,
				addToCart,
				updateCartItem,
				deleteCartItem,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
