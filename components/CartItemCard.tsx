import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
	Badge,
	Flex,
	HStack,
	Heading,
	Icon,
	IconButton,
	Image,
	Skeleton,
	VStack,
} from "native-base";
import { Screens, trending_products } from "../data";
import { TouchableOpacity } from "react-native";

const item = trending_products[0];
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { CartItemType } from "../types";
import useGetItemById from "../hooks/useGetItemById";
import useNavigation from "../hooks/useNavigation";
import useDebounce from "../hooks/useDebounce";
import { useCart } from "../provider/CartContextProvider";

export default function CartItemCard(item: CartItemType) {
	const { updateCartItem, deleteCartItem } = useCart();
	const [quantity, setQuatity] = React.useState(item.count);
	const { isLoading, isError, product } = useGetItemById(item.id);

	const navigation = useNavigation();
	const debouncedValue = useDebounce(quantity);

	const handleQuantityDecrease = React.useCallback(() => {
		setQuatity((e) => (e === 1 ? e : e - 1));
	}, []);

	useEffect(() => {
		updateCartItem(item.id, debouncedValue);
	}, [debouncedValue]);

	if (isLoading) {
		return <Skeleton w="full" h="120" />;
	}

	return product ? (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate(Screens.ProductDeatailScreen, {
					id: product._id,
				})
			}>
			<HStack bg="white" borderRadius={"md"} shadow={"2"} overflow={"hidden"}>
				<Image
					w={100}
					resizeMode="cover"
					borderRadius={"md"}
					source={{ uri: product.thumbnail }}
					alt={product.title}
				/>
				<VStack p={2} flex={1} justifyContent={"space-between"}>
					<VStack>
						<Heading size="xs" color={"gray.500"}>
							{product.brand}
						</Heading>
						<Flex
							minHeight={50}
							direction="row"
							justifyContent={"space-between"}>
							<Heading size="sm" w={"70%"}>
								{product.title}
							</Heading>

							<TouchableOpacity onPress={() => deleteCartItem(item.id)}>
								<Icon mr={2} size={7} as={<FontAwesome name="trash-o" />} />
							</TouchableOpacity>
						</Flex>
					</VStack>
					<Flex mt={2} mr={2} direction="row" justifyContent={"space-between"}>
						<Heading size={"md"}> ₹ {product.price}</Heading>
						<HStack alignItems={"center"} space={3}>
							<TouchableOpacity onPress={handleQuantityDecrease}>
								<Icon size={6} as={<AntDesign name="minuscircleo" />} />
							</TouchableOpacity>
							<Heading size="md">{quantity}</Heading>
							<TouchableOpacity onPress={() => setQuatity((e) => e + 1)}>
								<Icon
									size={6}
									color={"teal.500"}
									as={<AntDesign name="pluscircle" />}
								/>
							</TouchableOpacity>
						</HStack>
					</Flex>
				</VStack>
			</HStack>
		</TouchableOpacity>
	) : (
		<></>
	);
}
