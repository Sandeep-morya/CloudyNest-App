import { View, Text } from "react-native";
import React from "react";
import {
	Badge,
	Flex,
	HStack,
	Heading,
	Icon,
	IconButton,
	Image,
	VStack,
} from "native-base";
import { trending_products } from "../data";
import { TouchableOpacity } from "react-native";

const item = trending_products[0];
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function CartItemCard() {
	const [quantity, setQuatity] = React.useState(1);

	const handleQuantityDecrease = React.useCallback(() => {
		setQuatity((e) => (e === 1 ? e : e - 1));
	}, []);
	return (
		<HStack bg="white" borderRadius={"md"} shadow={"2"} overflow={"hidden"}>
			<Image
				w={100}
				resizeMode="cover"
				borderRadius={"md"}
				source={{ uri: item.thumbnail }}
				alt={item.title}
			/>
			<VStack p={2} flex={1} justifyContent={"space-between"}>
				<VStack>
					<Heading size="xs" color={"gray.500"}>
						{item.brand}
					</Heading>
					<Flex direction="row" justifyContent={"space-between"}>
						<Heading size="sm" w={"70%"}>
							{item.title}
						</Heading>

						<TouchableOpacity>
							<Icon mr={2} size={7} as={<FontAwesome name="trash-o" />} />
						</TouchableOpacity>
					</Flex>
				</VStack>
				<Flex mt={2} mr={2} direction="row" justifyContent={"space-between"}>
					<Heading> ₹ {item.price}</Heading>
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
	);
}
