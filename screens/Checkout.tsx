import {
	Button,
	HStack,
	VStack,
	View,
	Heading,
	ScrollView,
	Input,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../theme";
import { Screens } from "../data";
import useNavigation from "../hooks/useNavigation";
import CheckoutForm from "../components/CheckoutForm";
import { useState, useCallback } from "react";
import { AddressType, CartItemType } from "../types";
import { Alert } from "react-native";
const initialState: AddressType = {
	house: "",
	area: "",
	landmark: "",
	city: "",
	state: "",
	pincode: "",
};

export default function Checkout(props: any) {
	const navigation = useNavigation();
	const items = props.route.params.items as CartItemType[];

	const [deliveryAddress, setDeliveryAddress] = useState(initialState);

	const handleMoveToPayment = useCallback((address: AddressType) => {
		const allFilled = Object.values(address).every((e) => e != "");
		if (allFilled) {
			navigation.navigate(Screens.PaymentScreen, { items, address });
		} else {
			Alert.alert(
				"Delivery Address",
				"Fill All the fields of address form correctly",
			);
		}
	}, []);
	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.teal[500] }}>
			<VStack flex={1} p="2">
				<Heading size={"xl"} fontWeight={"900"}>
					Enter
				</Heading>
				<Heading size={"xl"} fontWeight={"900"}>
					Delivery Address
				</Heading>
				<ScrollView mt={3} rounded={"xl"}>
					<CheckoutForm {...{ deliveryAddress, setDeliveryAddress }} />
				</ScrollView>
			</VStack>

			{/*---:: Footer ::---*/}
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
					<Heading color="black"> ₹ {"2175"}</Heading>
				</VStack>
				<Button
					onPress={() => handleMoveToPayment(deliveryAddress)}
					size="lg"
					colorScheme={"teal"}
					rounded={"full"}>
					Proceed to Payment
				</Button>
			</HStack>
		</View>
	);
}
