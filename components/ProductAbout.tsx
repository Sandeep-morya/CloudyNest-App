import React from "react";
import { ProductType } from "../types";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";

import {
	FlatList,
	HStack,
	Heading,
	VStack,
	Text,
	Badge,
	Icon,
} from "native-base";

interface Props {
	count: number;
	size?: any;
	color?: any;
}

const Rating = ({ count, size, color }: Props) => {
	return (
		<HStack>
			{Array.from({ length: 5 }).map((_, index) => {
				const target = index + 1;
				const totalStar = Math.floor(count);
				return (
					<Icon
						key={index}
						size="5"
						color={"orange.500"}
						as={<FontAwesome name={target > totalStar ? "star-o" : "star"} />}
					/>
				);
			})}
		</HStack>
	);
};

export default function ProductAbout({
	title,
	price,
	rating,
	sizes,
	discount,
	brand,
}: ProductType) {
	return (
		<VStack flex={1} space={2} py={2}>
			<Heading size={"sm"} color={"gray.600"}>
				{brand}
			</Heading>
			<Heading numberOfLines={2} size={"md"}>
				{title}
			</Heading>
			<HStack space={2}>
				<Text>{rating}</Text>
				<Rating count={rating} />
			</HStack>

			<HStack space={4} alignItems={"baseline"}>
				<Heading> ₹ {price}</Heading>
				<Text
					textDecorationLine={"line-through"}
					textDecorationColor={"teal.500"}
					fontSize={"md"}
					color={"gray.600"}>
					₹ {Math.floor((price * 100) / discount)}
				</Text>
			</HStack>

			<FlatList
				horizontal
				data={sizes}
				renderItem={({ item }) => (
					<Badge colorScheme={"teal"} variant={"outline"} rounded={"full"}>
						{item}
					</Badge>
				)}
				keyExtractor={(item) => item + "sizes"}
				contentContainerStyle={{ alignItems: "center", columnGap: 5 }}
			/>
		</VStack>
	);
}
