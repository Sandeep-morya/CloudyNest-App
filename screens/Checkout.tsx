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

export default function Checkout() {
	const navigation = useNavigation();
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
					<CheckoutForm />
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
					onPress={() => navigation.navigate(Screens.PaymentScreen)}
					size="lg"
					colorScheme={"teal"}
					rounded={"full"}>
					Proceed to Payment
				</Button>
			</HStack>
		</View>
	);
}
