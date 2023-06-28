import { Dispatch, SetStateAction } from "react";
import { Button, Flex, Heading, Icon, Image, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { paymentImages } from "../data";
import { PaymentMethodType } from "../types";

interface Props {
	paymentMethod: PaymentMethodType | undefined;
	setPaymentMethod: Dispatch<SetStateAction<PaymentMethodType | undefined>>;
}

interface ImageButtonProps {
	uri: string;
	onPress: () => void;
	selected: boolean;
}

const ImageButton = ({ uri, onPress, selected }: ImageButtonProps) => (
	<Pressable onPress={onPress}>
		<Flex
			borderColor={"gray.300"}
			bg={selected ? "teal.600" : "white"}
			rounded={"md"}
			borderWidth={1}
			p={3}>
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
	onPress: () => void;
	selected: boolean;
}
const MyButton = ({ title, icon, onPress, selected = true }: MyButtonProps) => {
	return (
		<Button
			size="lg"
			py={3}
			rounded={"md"}
			variant={selected ? "solid" : "outline"}
			colorScheme={"teal"}
			onPress={onPress}
			leftIcon={
				<Icon
					color={selected ? "white" : "teal.500"}
					size={8}
					as={<Ionicons name={icon} />}
				/>
			}>
			<Heading color={selected ? "white" : "teal.500"}>{title}</Heading>
		</Button>
	);
};

export default function PaymentMethods({
	paymentMethod,
	setPaymentMethod,
}: Props) {
	return (
		<VStack space={5} p={4}>
			<ImageButton
				onPress={() => setPaymentMethod("Google Pay")}
				uri={paymentImages.google_pay}
				selected={paymentMethod === "Google Pay"}
			/>
			<ImageButton
				onPress={() => setPaymentMethod("Phone Pay")}
				uri={paymentImages.phone_pay}
				selected={paymentMethod === "Phone Pay"}
			/>
			<ImageButton
				onPress={() => setPaymentMethod("Paytm")}
				uri={paymentImages.paytm}
				selected={paymentMethod === "Paytm"}
			/>

			<MyButton
				onPress={() => setPaymentMethod("Debit Card")}
				icon={"md-card-outline"}
				title="Debit Card"
				selected={paymentMethod === "Debit Card"}
			/>
			<MyButton
				onPress={() => setPaymentMethod("Credit Card")}
				icon={"card"}
				title="Credit Card"
				selected={paymentMethod === "Credit Card"}
			/>
			<MyButton
				onPress={() => setPaymentMethod("Cash on Delivery")}
				icon={"cash-outline"}
				title="Pay on Delivery"
				selected={paymentMethod === "Cash on Delivery"}
			/>
		</VStack>
	);
}
