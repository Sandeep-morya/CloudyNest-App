import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	Badge,
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	IconButton,
	Input,
	Modal,
	VStack,
} from "native-base";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";
import { Screens } from "../data";
import { useCart } from "../provider/CartContextProvider";
import SearchResult from "../components/SearchResult";

export default function Header(props: StackHeaderProps) {
	const { items } = useCart();
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(false);

	return (
		<SafeAreaView>
			<Flex
				py={2}
				px={3}
				bg="teal.500"
				direction="row"
				justify="space-between"
				position="relative"
				alignItems={"center"}>
				<IconButton
					onPress={() => props.navigation.navigate(Screens.DrawerScreen)}
					variant="unstyled"
					_icon={{
						as: AntDesign,
						name: "menufold",
						color: "white",
						size: 6,
					}}
				/>
				<Input
					placeholder="Search"
					variant="filled"
					borderRadius="10"
					size={"xl"}
					value={query}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
					onSubmitEditing={() =>
						props.navigation.navigate(Screens.ProductsScreen, {
							category: query,
						})
					}
					onChangeText={(e) => setQuery(e)}
					colorScheme={"teal"}
					focusOutlineColor={"white"}
					_focus={{
						backgroundColor: "rbga(255,255,255,0.9)",
					}}
					rounded="full"
					width={"70%"}
					InputLeftElement={
						<Icon
							ml={3}
							size="5"
							color="gray.400"
							as={<Ionicons name="ios-search" />}
						/>
					}
				/>
				<Box alignItems="center">
					<VStack position={"relative"}>
						{items.length > 0 && (
							<Badge
								colorScheme="danger"
								position={"absolute"}
								rounded="full"
								size={"sm"}
								zIndex={1}
								top={-4}
								right={-10}
								variant="solid"
								alignSelf="flex-end"
								_text={{
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{items.length}
							</Badge>
						)}
						<IconButton
							variant="unstyled"
							onPress={() => props.navigation.navigate(Screens.CartScreen)}
							_icon={{
								as: MaterialIcons,
								name: "shopping-cart",
								color: "white",
								size: 6,
							}}
						/>
					</VStack>
				</Box>
			</Flex>
			{active && <SearchResult query={query} />}
		</SafeAreaView>
	);
}
