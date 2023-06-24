import {
	View,
	Text,
	Stack,
	Flex,
	HStack,
	IconButton,
	Icon,
	Pressable,
	Divider,
	VStack,
	Box,
	Heading,
} from "native-base";

import React, { useEffect } from "react";
import {
	FontAwesome,
	Ionicons,
	MaterialIcons,
	Foundation,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import theme from "../theme";
import { Linking } from "react-native";
import { Screens } from "../data";
import useNavigation from "../hooks/useNavigation";
import { IconType } from "../types";
import { StyleSheet, Animated } from "react-native";

interface Props {
	children: string;
	onPress?: () => void;
	LeftIcon?: IconType;
}

const Button = ({ children, onPress, LeftIcon }: Props) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? theme.colors.teal[100] : "transparent" },
			]}>
			<HStack py={3} alignItems={"center"} space={2}>
				{LeftIcon && (
					<Icon
						size={LeftIcon?.iconSize || 6}
						as={<LeftIcon.Vector name={LeftIcon.name} />}
					/>
				)}
				<Text fontSize={LeftIcon?.titleSize || 16}>{children}</Text>
			</HStack>
		</Pressable>
	);
};

export default function Drawer() {
	const navigation = useNavigation();
	const drawerAnimation = new Animated.Value(0);

	const openDrawer = () => {
		Animated.timing(drawerAnimation, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};
	const closeDrawer = () => {
		Animated.timing(drawerAnimation, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
		setTimeout(() => navigation.goBack(), 10);
	};

	const drawerTranslateX = drawerAnimation.interpolate({
		inputRange: [0, 1],
		outputRange: [-300, 0],
	});

	const drawerStyle = {
		transform: [{ translateX: drawerTranslateX }],
	};

	useEffect(openDrawer, []);

	return (
		<Animated.View style={[styles.drawerContainer, drawerStyle]}>
			<Stack flex={1} pt={6}>
				{/*---:: Drawer Header ::---*/}
				<Flex
					py={2}
					px={3}
					bg="teal.500"
					direction="row"
					justify="space-between"
					alignItems={"center"}>
					<HStack alignItems={"center"}>
						<IconButton
							onPress={closeDrawer}
							variant="unstyled"
							_icon={{
								as: FontAwesome,
								name: "angle-left",
								color: "white",
								size: 8,
							}}
						/>
						<Text fontWeight={"bold"} fontSize={18} color="white">
							Hello
						</Text>
					</HStack>

					<Pressable
						borderWidth={1.5}
						borderColor={"white"}
						px={2.5}
						py={1}
						onPress={() => navigation.navigate(Screens.AuthScreen)}
						borderRadius={"full"}>
						<Text fontWeight={"bold"} fontSize={18} color="white">
							Sign In
						</Text>
					</Pressable>
				</Flex>

				{/*---:: Navlinks ::---*/}
				<VStack p={3}>
					{/*---:: Section - 2 ::---*/}
					<Heading size={"md"}>Profile</Heading>
					<Button LeftIcon={{ Vector: Ionicons, name: "ios-shirt" }}>
						Your Orders
					</Button>

					<Divider />

					<Button LeftIcon={{ Vector: MaterialIcons, name: "shopping-cart" }}>
						Cart
					</Button>
					<Divider />
					<Button LeftIcon={{ Vector: MaterialIcons, name: "favorite" }}>
						WishList
					</Button>

					{/*---:: Section - 3 ::---*/}
					<Heading mt={4} size={"md"}>
						More
					</Heading>
					<Button LeftIcon={{ Vector: MaterialIcons, name: "card-giftcard" }}>
						Coupons
					</Button>
					<Divider />
					<Button LeftIcon={{ Vector: MaterialIcons, name: "local-offer" }}>
						Offers
					</Button>
					<Divider />
					<Button LeftIcon={{ Vector: MaterialIcons, name: "support" }}>
						Support
					</Button>
					<Heading mt={4} size={"md"}>
						Sell products
					</Heading>
					<Button
						onPress={() =>
							Linking.openURL("https://cloudynest.vercel.app/supplier/")
						}
						LeftIcon={{ Vector: FontAwesome, name: "users" }}>
						Login As Supplier
					</Button>
				</VStack>

				{/*---:: Footer ::---*/}
				<HStack flex="1" alignItems={"flex-end"}>
					<Flex
						flex={1}
						p={2}
						bg="gray.200"
						direction="row"
						borderTopRadius={"xl"}
						shadow={"9"}
						justify="space-between">
						<VStack>
							<Text fontSize={15}>
								Copyright &copy;{new Date().getFullYear()}
							</Text>
							<Text fontSize={13}>All rights reserved by CloudyNest</Text>
						</VStack>
						<HStack>
							<IconButton
								onPress={() =>
									Linking.openURL("https://cloudynest.vercel.app/")
								}
								variant="unstyled"
								_icon={{
									as: Foundation,
									name: "web",
									size: 6,
								}}
							/>
							<IconButton
								onPress={() =>
									Linking.openURL("https://github.com/Sandeep-morya/")
								}
								variant="unstyled"
								_icon={{
									as: FontAwesome,
									name: "github",
									size: 6,
								}}
							/>
							<IconButton
								onPress={() =>
									Linking.openURL(
										"https://api.whatsapp.com/send?phone=919988885304",
									)
								}
								variant="unstyled"
								_icon={{
									as: FontAwesome,
									name: "whatsapp",
									size: 6,
								}}
							/>
						</HStack>
					</Flex>
				</HStack>
			</Stack>
		</Animated.View>
	);
}
const styles = StyleSheet.create({
	drawerContainer: {
		position: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
		width: "100%",
	},
});
