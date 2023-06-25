import {
	Image,
	Heading,
	VStack,
	Box,
	Stack,
	Flex,
	Pressable,
} from "native-base";
import React from "react";

import { Screens, categoryData } from "../data";
import useNavigation from "../hooks/useNavigation";

const categories = categoryData;

export default function Categories() {
	const navigation = useNavigation();
	return (
		<VStack mt={3} p={2} space={2}>
			<Heading mx="auto" size={"xl"}>
				Top Categories
			</Heading>

			<Stack direction="row" flexWrap={"wrap"}>
				{categories.map(({ image, title, color, category }, index) => (
					<Flex
						style={{
							width: "45%",
							aspectRatio: 1,
							borderRadius: 8,
							overflow: "hidden",
							borderColor: "rgba(0,0,0,0.1)", // if you need
							borderWidth: 1,
							shadowColor: "black",
							elevation: 4,
							shadowOpacity: 1,
						}}
						alignItems="center"
						justify="space-evenly"
						bg={color}
						m={2}
						key={title + color}>
						<Pressable
							onPress={() =>
								navigation.navigate(Screens.ProductsScreen, { category })
							}>
							<Image
								style={{
									height: "80%",
									aspectRatio: 1,
								}}
								resizeMode="contain"
								source={image}
								alt="Categories"
							/>
						</Pressable>
						<Heading size={"sm"}>{title}</Heading>
					</Flex>
				))}
			</Stack>
		</VStack>
	);
}
