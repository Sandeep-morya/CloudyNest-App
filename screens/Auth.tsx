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
import { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KEY, Screens, envs } from "../data";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { useAuth } from "../provider/AuthContextProvider";
import useNavigation from "../hooks/useNavigation";
import { LoginDataType, RegistrationDataType } from "../types";
import * as SecureStore from "expo-secure-store";

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

const { BASE_URL } = envs;
const API = axios.create({ baseURL: BASE_URL + "/user" });

const initialState = {
	name: "",
	email: "",
	password: "",
};

export default function Auth() {
	const navigation = useNavigation();
	const [show, setShow] = useState(false);
	const { isAuth, setIsAuth } = useAuth();
	const [loginActive, setLoginActive] = useState(true);

	const [formData, setFormData] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	if (isAuth) {
		navigation.navigate(Screens.HomeScreen);
	}

	const Authenticate = useCallback(
		async (formData: RegistrationDataType) => {
			setIsLoading(true);
			try {
				const { data } = await API.post(
					loginActive ? "/login" : "/register",
					formData,
				);
				if (data === "Above Email is not registered with us") {
					alert(data);
					setIsError(true);
				} else if (data === "Oopss.. you have enterd a wrong password") {
					alert(data);
					setIsError(true);
				} else {
					await SecureStore.setItemAsync(KEY, data.token);
					setIsAuth(true);
					navigation.replace(Screens.HomeScreen);
				}
				setIsLoading(false);
			} catch (error) {
				alert("Interanl Server Error");
				setIsLoading(false);
				setIsError(true);
			} /* finally(){} */
		},
		[loginActive],
	);

	return (
		<Stack flex={1} space={10} p={2}>
			<SafeAreaView>
				<Flex alignItems={"flex-end"} p={5} pt={2}>
					<TouchButton
						onPress={() => navigation.navigate(Screens.HomeScreen)}
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
						value={formData.name}
						onChangeText={(e) => setFormData((x) => ({ ...x, name: e }))}
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
					value={formData.email}
					onChangeText={(e) => setFormData((x) => ({ ...x, email: e }))}
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
					value={formData.password}
					onChangeText={(e) => setFormData((x) => ({ ...x, password: e }))}
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
				onPress={() => Authenticate(formData)}
				py={4}
				isLoading={isLoading}
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
