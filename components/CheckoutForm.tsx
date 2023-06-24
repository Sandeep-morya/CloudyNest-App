import { View, Text } from "react-native";
import React from "react";
import { Input, VStack } from "native-base";

interface MyInputProps {
	placeholder: string;
}

const MyInput = (props: MyInputProps) => (
	<Input
		size="xl"
		py="4"
		bg="white"
		rounded={"lg"}
		placeholder={props.placeholder}
		_focus={{ backgroundColor: "white" }}
	/>
);

export default function CheckoutForm() {
	return (
		<VStack space={3} p={2}>
			<MyInput placeholder="HOUSE NO., STREEET, VILLAGE" />
			<MyInput placeholder="AREA, COLONY, ROAD" />
			<MyInput placeholder="CITY" />
			<MyInput placeholder="STATE" />
			<MyInput placeholder="PINCODE" />
			<MyInput placeholder="ANYTHING FAMOUS NEAR YOU" />
		</VStack>
	);
}
