import {
	Button,
	Center,
	HStack,
	Heading,
	ScrollView,
	Text,
	VStack,
} from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { trending_products } from "../data";
import { FlatList } from "react-native-gesture-handler";
import API from "../utlis/api";
import { ProductType } from "../types";
import { ActivityIndicator } from "react-native";
import theme from "../theme";
import Pagination from "../components/Pagination";

interface Props {
	route: any;
	navigation: any;
}

// const products = trending_products;

export default function Products({ route, navigation }: Props) {
	const { category } = route.params;
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [products, setProdcuts] = useState<ProductType[]>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const getProducts = useCallback(
		async (page: number = 1) => {
			setIsLoading(true);
			try {
				const { data } = await API.get("/product", {
					params: { q: category, page },
				});
				setProdcuts(data.products);
				setTotalPages(data.total_pages);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
			}
		},
		[category],
	);

	useEffect(() => {
		getProducts(page);
	}, [page]);
	return (
		<VStack space={1} mb={12} flex={1}>
			<HStack p={3} bg="teal.100">
				<Text fontWeight={"600"} fontSize="md">
					Top search sesults for "{category}"
				</Text>
			</HStack>

			{isLoading && (
				<ActivityIndicator size={"large"} color={theme.colors.teal[500]} />
			)}
			{!isLoading && products.length === 0 && (
				<Center>
					<Heading>No items found</Heading>
				</Center>
			)}
			<VStack>
				{totalPages > 1 && <Pagination {...{ totalPages, page, setPage }} />}
				<FlatList
					data={products}
					renderItem={({ item: product }) => (
						<ProductCard key={product._id + "card"} {...product} />
					)}
					keyExtractor={(item) => item._id + "card"}
					contentContainerStyle={{ rowGap: 10, paddingBottom: 85 }}
				/>

				{/*---:: Pagination ::---*/}
			</VStack>
		</VStack>
	);
}
