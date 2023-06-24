import { Avatar, HStack, Heading, VStack, Text } from "native-base";
import React from "react";
import { sellerProfile } from "../data";
interface Props {
	sellerID: string | number;
}

export default function SellerCard({ sellerID }: Props) {
	return (
		<VStack>
			<HStack space={3}>
				<Avatar source={{ uri: sellerProfile.image }} />
				<VStack>
					<Heading size="md">{sellerProfile.name}</Heading>
					<Text color={"gray.500"}>{sellerProfile.address}</Text>
				</VStack>
			</HStack>
		</VStack>
	);
}
