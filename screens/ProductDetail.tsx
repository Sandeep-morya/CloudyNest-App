import {
	Box,
	Button,
	Divider,
	HStack,
	Heading,
	Icon,
	ScrollView,
	Text,
	VStack,
} from "native-base";
import { useCallback, useMemo } from "react";
import ProductView from "../components/ProductView";
import ProductAbout from "../components/ProductAbout";
import SellerCard from "../components/SellerCard";
import { ResponsiveValue } from "native-base/lib/typescript/components/types";
import { ButtonVariantType, ProductType } from "../types";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import { useCart } from "../provider/CartContextProvider";
import { useAuth } from "../provider/AuthContextProvider";
import { Screens } from "../data";
import { checkItemExistsInCart } from "../utlis/product";
import useGetItemById from "../hooks/useGetItemById";
import LoaderProductDetail from "../components/LoaderProductDetail";
import { Alert } from "react-native";
import { useState } from "react";

interface ButtonProps {
	title: string;
	variant?: ButtonVariantType;
	leftIcon?: JSX.Element;
	isLoading?: boolean | undefined;
	onPress?: () => void;
	disabled?: boolean | undefined;
}

const MyButton = ({
	title,
	variant,
	leftIcon,
	onPress,
	disabled,
	isLoading,
}: ButtonProps) => (
	<Button
		onPress={onPress}
		colorScheme={"teal"}
		variant={variant}
		outlineColor={"teal"}
		size="lg"
		isLoading={isLoading}
		leftIcon={leftIcon}
		rounded={"full"}
		disabled={disabled}
		shadow={variant === "outline" ? "none" : 6}
		flex={1}>
		{title}
	</Button>
);

interface Props {
	route: any;
	navigation: any;
}

export default function ProductDeatail({ navigation, route }: Props) {
	const { id } = route.params;
	const { auth } = useAuth();
	const { addToCart, items, isLoading } = useCart();
	const { product, isLoading: loading } = useGetItemById(id);

	const [selectedSize, setSelectedSize] = useState(0);

	const exists = useMemo(
		() => checkItemExistsInCart(items, product?._id),
		[items, product?._id],
	);

	const handleAddToCart = useCallback((product: ProductType) => {
		if (!auth) {
			navigation.navigate(Screens.AuthScreen);
		} else {
			addToCart(product);
		}
	}, []);

	if (loading) {
		return <LoaderProductDetail />;
	}

	return product ? (
		<ScrollView p={"1.5"}>
			<ProductView images={product.images} />
			<VStack p={2} space={2} mb={4}>
				<ProductAbout {...product} {...{ setSelectedSize, selectedSize }} />
				<HStack w="full" justifyContent={"space-between"} space={3}>
					<MyButton
						variant="outline"
						title={`${exists ? "Added in " : "Add to "}Cart`}
						leftIcon={<Icon as={<MaterialIcons name="add-shopping-cart" />} />}
						onPress={() => handleAddToCart(product)}
						disabled={exists}
						isLoading={isLoading}
					/>
					<MyButton
						variant={"solid"}
						title="Buy Now"
						leftIcon={<Icon as={<FontAwesome name="angle-double-right" />} />}
						onPress={() => console.log("buy now clicked")}
					/>
				</HStack>

				<Heading mt={2} size={"md"} color={"gray.500"}>
					Description
				</Heading>
				<Text color={"gray.500"} letterSpacing={0.5} fontSize={15}>
					{product.description}
				</Text>
				<Divider mt={2} />
				<Heading size={"md"} mt={2} color={"gray.500"}>
					Sold By
				</Heading>
				<SellerCard sellerID={product.seller} />
			</VStack>
		</ScrollView>
	) : (
		<></>
	);
}
