import {
	Heading,
	VStack,
	View,
	ScrollView,
	Button,
	theme,
	Icon,
	Flex,
} from "native-base";
import { useState, Dispatch, SetStateAction, useCallback } from "react";
import { Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import PaymentMethods from "../components/PaymentMethods";
import { Screens } from "../data";
import { AddressType, CartItemType, PaymentMethodType } from "../types";
import API from "../utlis/api";
import { useAuth } from "../provider/AuthContextProvider";
import { ActivityIndicator } from "react-native";

interface Props {
	route: any;
	navigation: any;
}

export default function Payment({ route, navigation }: Props) {
	const { auth } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const items = route.params.items as CartItemType[];
	const address = route.params.address as AddressType;
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>();

	const handlePlaceOrder = useCallback(
		async (paymentMethod: PaymentMethodType | undefined) => {
			if (paymentMethod) {
				setIsLoading(true);
				for (let item of items) {
					const orderDetails = {
						item: item.id,
						seller: item.seller,
						quantity: item.count,
						delivery_address: Object.values(address).join(" "),
						amount: item.count * item.price,
						payment_method: paymentMethod,
						payment_status:
							paymentMethod != "Cash on Delivery" ? "Paid" : "Pending",
					};
					try {
						const { data } = await API.post(`/orders`, orderDetails, {
							headers: {
								Authorization: auth,
							},
						});
					} catch (error) {
						setIsLoading(false);
						break;
					}
				}
				setIsLoading(false);
				Alert.alert("Successfull", "Odrder Placed Successfully", [], {
					cancelable: true,
					onDismiss: () => navigation.navigate(Screens.HomeScreen),
				});
			} else {
				Alert.alert("Payment Method", "Select a payment method", [], {
					cancelable: true,
				});
			}
		},
		[],
	);

	return (
		<View style={{ flex: 1 }}>
			{isLoading && (
				<Flex position={"absolute"} flex={1} justify="center" align="center">
					<ActivityIndicator size="large" />
				</Flex>
			)}
			<VStack flex={1} p="2">
				<Heading size={"xl"} fontWeight={"900"}>
					Choose
				</Heading>
				<Heading size={"xl"} fontWeight={"900"}>
					Payment Method
				</Heading>
				<ScrollView mt={3} rounded={"xl"}>
					<PaymentMethods {...{ paymentMethod, setPaymentMethod }} />
				</ScrollView>
			</VStack>

			<Button
				onPress={() => handlePlaceOrder(paymentMethod)}
				size="lg"
				py={6}
				android_ripple={{ color: theme.colors.teal[500] }}
				leftIcon={
					<Icon size={6} mr={4} as={<FontAwesome5 name="shopping-bag" />} />
				}
				colorScheme={"teal"}>
				<Heading textTransform={"uppercase"} color="white" size="md">
					Place Order
				</Heading>
			</Button>
		</View>
	);
}
