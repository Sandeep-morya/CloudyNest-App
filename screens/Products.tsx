import { HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import ProductCard from "../components/ProductCard";
import { trending_products } from "../data";
import { FlatList } from "react-native-gesture-handler";

interface Props {
	route: any;
	navigation: any;
}

const products = trending_products;

export default function Products({ route, navigation }: Props) {
	const { category } = route.params;
	return (
		<VStack space={2} mb={12}>
			<HStack p={3} bg="teal.100">
				<Text fontWeight={"600"} fontSize="md">
					Top search sesults for "{category}"
				</Text>
			</HStack>
			<FlatList
				data={products}
				renderItem={({ item: product }) => (
					<ProductCard key={product._id + "card"} {...product} />
				)}
				keyExtractor={(item) => item._id + "card"}
				contentContainerStyle={{ rowGap: 10 }}
			/>
		</VStack>
	);
}
