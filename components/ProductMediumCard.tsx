import {
	HStack,
	View,
	Text,
	VStack,
	Image,
	Stack,
	Heading,
	Box,
	AspectRatio,
	Pressable,
} from "native-base";
import React, { useState } from "react";
import useNavigation from "../hooks/useNavigation";
import { Screens } from "../data";
import { ProductType } from "../types";

export default function ProductMediumCard(product: ProductType) {
	const navigation = useNavigation();
	const [thumbnail, setThumbnail] = useState(0);

	return (
		<VStack w="full" p={2} space={2}>
			<Pressable
				onPress={() =>
					navigation.navigate(Screens.ProductDeatailScreen, { data: product })
				}>
				<Image
					w={"full"}
					h={300}
					borderRadius={"lg"}
					resizeMethod="resize"
					source={{ uri: product.images[thumbnail] }}
					alt={product.title}
				/>
			</Pressable>

			<HStack w={"full"} justifyContent={"space-between"}>
				<Text w={"60%"} fontSize={"md"} color={"gray.700"}>
					{product.title}
				</Text>
				<Heading numberOfLines={1} color={"gray.700"} fontSize={"xl"}>
					₹ {product.price}
				</Heading>
			</HStack>

			<Stack direction={"row"} w={"full"} space={3}>
				{product.images.map((item, index) => (
					<Pressable key={item} onPress={() => setThumbnail(index)}>
						<AspectRatio w={60} ratio={4 / 5}>
							<Image
								resizeMode="cover"
								borderRadius={"md"}
								source={{ uri: item }}
								alt={product.title}
							/>
						</AspectRatio>
					</Pressable>
				))}
			</Stack>
		</VStack>
	);
}
