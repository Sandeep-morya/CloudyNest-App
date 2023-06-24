import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Flex, Icon, IconButton, Input, VStack } from "native-base";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";
import { Screens } from "../data";

export default function Header(props: StackHeaderProps) {
	return (
		<SafeAreaView>
			<VStack>
				<Flex
					py={2}
					px={3}
					bg="teal.500"
					direction="row"
					justify="space-between"
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
				</Flex>
			</VStack>
		</SafeAreaView>
	);
}
