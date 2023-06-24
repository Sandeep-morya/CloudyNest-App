import {
	Box,
	Button,
	Divider,
	HStack,
	Heading,
	Icon,
	ScrollView,
	Text,
	VStack,
} from "native-base";
import React from "react";
import ProductView from "../components/ProductView";
import { trending_products } from "../data";
import ProductAbout from "../components/ProductAbout";
import SellerCard from "../components/SellerCard";
import { ResponsiveValue } from "native-base/lib/typescript/components/types";
import { ButtonVariantType } from "../types";
import {
	FontAwesome,
	Ionicons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
const product = trending_products[0];

const { description, images, seller } = product;

interface ButtonProps {
	title: string;
	variant?: ButtonVariantType;
	leftIcon?: JSX.Element;
}

const MyButton = ({ title, variant, leftIcon }: ButtonProps) => (
	<Button
		colorScheme={"teal"}
		variant={variant}
		outlineColor={"teal"}
		size="lg"
		leftIcon={leftIcon}
		rounded={"full"}
		shadow={variant === "outline" ? "none" : 6}
		flex={1}>
		{title}
	</Button>
);

export default function ProductDeatail() {
	return (
		<ScrollView p={"1.5"}>
			<ProductView images={images} />
			<VStack p={2} space={2} mb={4}>
				<ProductAbout {...product} />
				<HStack w="full" justifyContent={"space-between"} space={3}>
					<MyButton
						variant="outline"
						title="Add to Cart"
						leftIcon={<Icon as={<MaterialIcons name="add-shopping-cart" />} />}
					/>
					<MyButton
						variant={"solid"}
						title="Buy Now"
						leftIcon={<Icon as={<FontAwesome name="angle-double-right" />} />}
					/>
				</HStack>

				<Heading mt={2} size={"md"} color={"gray.500"}>
					Description
				</Heading>
				<Text color={"gray.500"} letterSpacing={0.5} fontSize={15}>
					{description}
				</Text>
				<Divider mt={2} />
				<Heading size={"md"} mt={2} color={"gray.500"}>
					Sold By
				</Heading>
				<SellerCard sellerID={seller} />
			</VStack>
		</ScrollView>
	);
}
