import { Stack, ScrollView } from "native-base";
import React from "react";

import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import TopProducts from "../components/TopProducts";
import SmallCategories from "../components/SmallCategories";

export default function Home(props: any) {
	return (
		<ScrollView bg={"white"}>
			<Stack flex={1}>
				{/*---:: User Delivery Location ::---*/}
				{/* <Button colorScheme={"teal"} size="lg" variant={"subtle"}>
					Hello Sir,
				</Button> */}

				<SmallCategories />

				{/*---:: Carousel ::---*/}
				<Carousel />
				{/*---:: Catrgories ::---*/}
				<Categories />

				<TopProducts />
			</Stack>
		</ScrollView>
	);
}
