import { useState, useCallback, useEffect } from "react";
import {
	VStack,
	Text,
	PresenceTransition,
	HStack,
	Icon,
	Flex,
	Badge,
	Divider,
	Skeleton,
} from "native-base";
import { ProductType } from "../types";
import useNavigation from "../hooks/useNavigation";
import API from "../utlis/api";
import useDebounce from "../hooks/useDebounce";
import { ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Screens, categoryData } from "../data";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
	query: string;
}

export default function SearchResult({ query }: Props) {
	const navigation = useNavigation();
	const debouncedQuery = useDebounce(query, 500);

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [results, setResults] = useState<ProductType[]>([]);

	const getSearchResult = useCallback(async (query: string) => {
		setIsLoading(true);
		try {
			const { data } = await API.get("/product/search", {
				params: { q: query, limit: 10 },
			});
			setResults(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
	}, []);

	useEffect(() => {
		getSearchResult(debouncedQuery);
	}, [debouncedQuery]);

	return (
		<VStack
			position={"absolute"}
			top={90}
			bg="white"
			w={"full"}
			h={"500"}
			p={2}
			space={3}
			shadow={"7"}
			borderBottomLeftRadius={"lg"}
			borderBottomRightRadius={"lg"}>
			<HStack flexWrap={"wrap"}>
				{categoryData.map((category) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(Screens.ProductsScreen, {
								category: category.category,
							})
						}
						key={category.title + "badge"}>
						<Text rounded={"full"} bg="gray.200" py={2} px={3} m={2}>
							{category.title}
						</Text>
					</TouchableOpacity>
				))}
			</HStack>
			<Divider />
			<ScrollView>
				{isLoading && <ActivityIndicator size="large" />}
				{results.map((result) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(Screens.ProductDeatailScreen, {
								id: result._id,
							})
						}
						key={result._id + "search-result"}>
						<HStack p="2" space={2}>
							<FontAwesome5 name="search" size={20} color="black" />
							<Text fontSize={16}>{result.title}</Text>
						</HStack>
					</TouchableOpacity>
				))}
			</ScrollView>
		</VStack>
	);
}
