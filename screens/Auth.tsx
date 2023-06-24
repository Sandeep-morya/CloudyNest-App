import {
	Stack,
	Text,
	Flex,
	Box,
	Heading,
	Input,
	Button,
	Icon,
	IconButton,
	View,
	HStack,
} from "native-base";

import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screens } from "../data";
import { TouchableOpacity } from "react-native";

interface TouchButtonProps {
	onPress: () => void;
	title: string;
}

const TouchButton = ({ onPress, title }: TouchButtonProps) => (
	<TouchableOpacity onPress={onPress}>
		<Text color={"teal.500"} fontSize={18} fontWeight={"600"}>
			{title}
		</Text>
	</TouchableOpacity>
);

export default function Auth(props: any) {
	const [show, setShow] = React.useState(false);
	const [loginActive, setLoginActive] = useState(true);

	return (
		<Stack flex={1} space={10} p={2}>
			<SafeAreaView>
				<Flex alignItems={"flex-end"} p={5} pt={2}>
					<TouchButton
						onPress={() => props.navigation.navigate(Screens.HomeScreen)}
						title="Skip"
					/>
				</Flex>
			</SafeAreaView>

			<Box>
				<Heading size={"3xl"} fontWeight={"900"}>
					{loginActive ? "Sign in to CloudyNest" : "Registration"}
				</Heading>
			</Box>

			<Stack space={4} w="100%" alignItems="center">
				{!loginActive && (
					<Input
						w={"90%"}
						size={"xl"}
						focusOutlineColor={"teal.500"}
						py={3}
						colorScheme={"teal"}
						InputLeftElement={
							<Icon
								as={<MaterialIcons name="person" />}
								size={6}
								ml="2"
								color="muted.400"
							/>
						}
						placeholder="Your Name"
					/>
				)}
				<Input
					w={"90%"}
					size={"xl"}
					focusOutlineColor={"teal.500"}
					py={3}
					colorScheme={"teal"}
					InputLeftElement={
						<Icon
							as={<MaterialIcons name="alternate-email" />}
							size={6}
							ml="2"
							color="muted.400"
						/>
					}
					placeholder="Email"
				/>
				<Input
					w={"90%"}
					size={"xl"}
					py={3}
					focusOutlineColor={"teal.500"}
					colorScheme={"teal"}
					type={show ? "text" : "password"}
					InputRightElement={
						<TouchableOpacity onPress={() => setShow(!show)}>
							<Icon
								as={
									<MaterialIcons
										name={show ? "visibility" : "visibility-off"}
									/>
								}
								size={6}
								mr="2"
								color="muted.400"
							/>
						</TouchableOpacity>
					}
					placeholder="Password"
				/>
			</Stack>

			<Button
				bg="teal.500"
				w={"90%"}
				alignSelf={"center"}
				size="lg"
				py={4}
				variant="solid">
				{loginActive ? "Login to Continue" : "Register"}
			</Button>

			<Flex mx="auto" w="90%" direction="row" alignItems={"center"}>
				<View h={0.5} w="40%" bg="teal.500"></View>
				<Text mx="auto">OR</Text>
				<Box h={0.5} w="40%" bg="teal.500"></Box>
			</Flex>

			<HStack mx="auto" space={2}>
				<Text fontSize={18} fontWeight={"600"}>
					{loginActive
						? "Don't have an account ? "
						: "Already have an account ? "}
				</Text>
				<TouchButton
					onPress={() => setLoginActive(!loginActive)}
					title={loginActive ? "SignUp" : "Login"}
				/>
			</HStack>

			<Flex w="80%" mx="auto" direction="row" justify="space-between">
				<IconButton
					variant="unstyled"
					_icon={{
						as: FontAwesome,
						name: "google-plus-circle",
						color: "red.500",
						size: 16,
					}}
				/>
				<IconButton
					variant="unstyled"
					_icon={{
						as: MaterialIcons,
						name: "facebook",
						color: "blue.500",
						size: 16,
					}}
				/>
				<IconButton
					variant="unstyled"
					_icon={{
						as: FontAwesome,
						name: "github",
						color: "black",
						size: 16,
					}}
				/>
			</Flex>
		</Stack>
	);
}
