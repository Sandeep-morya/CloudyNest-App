import { VStack, Heading } from "native-base";
import React from "react";
import ProductMediumCard from "./ProductMediumCard";
import { trending_products } from "../data";

export default function TopProducts() {
	return (
		<VStack mt={3} p={2} space={2}>
			<Heading mx="auto" size={"xl"}>
				Trending Products
			</Heading>
			<VStack space={4}>
				{trending_products.map((e) => (
					<ProductMediumCard
						key={e._id}
						id={e._id}
						title={e.title}
						images={e.images}
						price={e.price}
					/>
				))}
			</VStack>
		</VStack>
	);
}
