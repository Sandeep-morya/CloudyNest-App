import {
	View,
	Text,
	HStack,
	Pressable,
	AspectRatio,
	Image,
	VStack,
	Heading,
	Badge,
} from "native-base";
import React from "react";
import { Screens, trending_products } from "../data";
import { FlatList } from "react-native-gesture-handler";
import useNavigation from "../hooks/useNavigation";
import { ProductType } from "../types";
import ProductAbout from "./ProductAbout";

export default function ProductCard(props: ProductType) {
	const { _id, thumbnail, title } = props;
	const navigation = useNavigation();
	return (
		<Pressable
			px={2}
			onPress={() =>
				navigation.navigate(Screens.ProductDeatailScreen, { data: props })
			}>
			<HStack
				w={"full"}
				justifyContent={"space-between"}
				space={2}
				borderRadius={"md"}
				overflow={"hidden"}
				shadow={2}
				bg={"gray.200"}>
				<Image
					w={"40"}
					style={{
						aspectRatio: 4 / 6,
					}}
					source={{ uri: thumbnail }}
					alt={title}
				/>

				<ProductAbout {...props} />
			</HStack>
		</Pressable>
	);
}
