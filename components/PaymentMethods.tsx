import React from "react";
import { Button, Flex, Heading, Icon, Image, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { paymentImages } from "../data";
interface ImageButtonProps {
	uri: string;
}

const ImageButton = ({ uri }: ImageButtonProps) => (
	<Pressable>
		<Flex borderColor={"gray.300"} borderWidth={1} p={2.5}>
			<Image
				h={8}
				resizeMode="contain"
				source={{
					uri,
				}}
				alt="payment-method"
			/>
		</Flex>
	</Pressable>
);
interface MyButtonProps {
	title: string;
	icon: any;
}
const MyButton = ({ title, icon }: MyButtonProps) => {
	return (
		<Button
			size="lg"
			py={3}
			rounded={"md"}
			variant={"outline"}
			colorScheme={"teal"}
			leftIcon={
				<Icon color="teal.500" size={8} as={<Ionicons name={icon} />} />
			}>
			<Heading color={"teal.500"}>{title}</Heading>
		</Button>
	);
};

export default function PaymentMethods() {
	return (
		<VStack space={5} p={4}>
			<ImageButton uri={paymentImages.google_pay} />
			<ImageButton uri={paymentImages.phone_pay} />
			<ImageButton uri={paymentImages.paytm} />

			<MyButton icon={"md-card-outline"} title="Debit Card" />
			<MyButton icon={"card"} title="Credit Card" />
			<MyButton icon={"cash-outline"} title="Pay on Delivery" />
		</VStack>
	);
}
