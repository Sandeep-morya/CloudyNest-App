import React from "react";
import { FlatList, Image, Pressable, Text, VStack } from "native-base";
import useNavigation from "../hooks/useNavigation";
import { Screens, categoryData } from "../data";

const categories = Array.from(categoryData);

export default function SmallCategories() {
	const navigation = useNavigation();

	return (
		<FlatList
			bg={"gray.100"}
			shadow={5}
			data={categories}
			renderItem={({ item }) => (
				<VStack py={2} px={1}>
					<Pressable
						onPress={() => {
							/* 1. Navigate to the Details route with params */
							navigation.navigate(Screens.ProductsScreen, {
								category: item.category,
							});
						}}>
						<Image
							w={50}
							h={50}
							resizeMode="contain"
							source={item.image}
							alt={item.title}
						/>
					</Pressable>

					<Text>{item.title}</Text>
				</VStack>
			)}
			keyExtractor={({ title }, index) => title + index}
			horizontal
			contentContainerStyle={{ columnGap: 5 }}
			showsHorizontalScrollIndicator={false}
		/>
	);
}
