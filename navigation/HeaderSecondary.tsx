﻿import { View, Text } from "react-native";
import React from "react";
import { StackHeaderProps } from "@react-navigation/stack";
import { Flex, HStack, IconButton, Heading, Avatar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { sellerProfile } from "../data";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../provider/AuthContextProvider";

export default function HeaderSecondary({
	navigation,
	route,
}: StackHeaderProps) {
	const { user } = useAuth();
	return (
		<SafeAreaView>
			<Flex bg="teal.500" direction="row" justify="space-between" p={2}>
				<HStack alignItems={"center"} space={2}>
					<IconButton
						onPress={() => navigation.goBack()}
						variant="unstyled"
						_icon={{
							as: MaterialIcons,
							name: "keyboard-backspace",
							color: "white",
							size: 6,
						}}
					/>
					<Heading size="md" color={"white"}>
						{route.name}
					</Heading>
				</HStack>
				<Avatar bg={"white"} _text={{ color: "black" }} shadow={"7"}>
					{user?.name.substring(0, 2).toUpperCase()}
				</Avatar>
			</Flex>
		</SafeAreaView>
	);
}
