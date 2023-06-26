import {
	Avatar,
	Button,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
	theme,
	View,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screens, trending_products } from "../data";
import { sellerProfile } from "../data";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import CartItemCard from "../components/CartItemCard";
import useNavigation from "../hooks/useNavigation";
import Private from "../provider/Private";
import { useCart } from "../provider/CartContextProvider";

const user = sellerProfile;

export default function Cart() {
	const navigation = useNavigation();
	const { items, cartPrice } = useCart();
	return (
		<Private>
			<View style={{ flex: 1, backgroundColor: theme.colors.teal[500] }}>
				<VStack flex={1} p="2">
					<Heading size={"xl"} color={"black"} fontWeight={"900"}>
						My Cart List
					</Heading>
					<Text fontSize="18" color={"black"}>
						Number of items: {items.length}
					</Text>
					{items.length ? (
						<FlatList
							data={items}
							keyExtractor={(item) => item.id + "cart"}
							renderItem={({ item }) => <CartItemCard {...item} />}
							contentContainerStyle={{
								marginTop: 50,
								rowGap: 20,
							}}
						/>
					) : (
						<VStack flex={1} justifyContent={"center"}>
							<Image
								w={"100%"}
								h={300}
								rounded={"md"}
								source={{
									uri: "https://res.cloudinary.com/due9pi68z/image/upload/v1679162004/pm9ia6wpkie9isxnhmsy.webp",
								}}
								alt="Nothing here"
							/>
						</VStack>
					)}
				</VStack>

				{/*---:: Footer ::---*/}
				{items.length > 0 && (
					<HStack
						alignItems={"center"}
						justifyContent={"space-between"}
						p={2}
						h={70}
						bg="white">
						<VStack>
							<Heading color="black" size={"sm"}>
								Total Amount
							</Heading>
							<Heading color="black"> ₹ {cartPrice}</Heading>
						</VStack>
						<Button
							onPress={() => navigation.navigate(Screens.CheckoutScreen)}
							size="lg"
							colorScheme={"teal"}
							rounded={"full"}>
							Proceed to checkout
						</Button>
					</HStack>
				)}
			</View>
		</Private>
	);
}
