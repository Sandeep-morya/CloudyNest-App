import { View, Text } from "react-native";
import { Dispatch, SetStateAction, useCallback } from "react";
import { Heading, Input, VStack } from "native-base";
import { AddressType } from "../types";

interface MyInputProps {
	placeholder: string;
	value: string;
	onChangeText: (e: string) => void;
	maxLength?: number | undefined;
	keyboardType?: any;
}

const MyInput = (props: MyInputProps) => (
	<Input
		size="xl"
		py="4"
		bg="white"
		maxLength={props.maxLength}
		keyboardType={props.keyboardType}
		rounded={"lg"}
		onChangeText={props.onChangeText}
		placeholder={props.placeholder}
		_focus={{ backgroundColor: "white" }}
	/>
);

interface Props {
	deliveryAddress: AddressType;
	setDeliveryAddress: Dispatch<SetStateAction<AddressType>>;
}

export default function CheckoutForm({
	deliveryAddress,
	setDeliveryAddress,
}: Props) {
	return (
		<VStack space={3} p={2}>
			<MyInput
				value={deliveryAddress.house}
				placeholder="HOUSE NO., STREEET, VILLAGE"
				onChangeText={(e) => setDeliveryAddress((x) => ({ ...x, house: e }))}
			/>
			<MyInput
				value={deliveryAddress.area}
				placeholder="AREA, COLONY, ROAD"
				onChangeText={(e) => setDeliveryAddress((x) => ({ ...x, area: e }))}
			/>
			<MyInput
				value={deliveryAddress.city}
				placeholder="CITY"
				onChangeText={(e) => setDeliveryAddress((x) => ({ ...x, city: e }))}
			/>
			<MyInput
				value={deliveryAddress.state}
				placeholder="STATE"
				onChangeText={(e) => setDeliveryAddress((x) => ({ ...x, state: e }))}
			/>
			<MyInput
				value={deliveryAddress.pincode}
				placeholder="PINCODE"
				maxLength={6}
				keyboardType={"numeric"}
				onChangeText={(e) => setDeliveryAddress((x) => ({ ...x, pincode: e }))}
			/>
			<MyInput
				value={deliveryAddress.landmark}
				placeholder="ANYTHING FAMOUS NEAR YOU"
				onChangeText={(e) => setDeliveryAddress((x) => ({ ...x, landmark: e }))}
			/>
		</VStack>
	);
}
