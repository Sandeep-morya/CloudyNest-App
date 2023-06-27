import { Skeleton, ScrollView, VStack, HStack, Divider } from "native-base";
import React from "react";
import LoaderProductView from "./LoaderProductView";

export default function LoaderProductDetail() {
	return (
		<ScrollView p={"1.5"}>
			<LoaderProductView />
			<VStack p={2} space={2} mb={4}>
				<Skeleton h={"150"} rounded="md" />
				<HStack w="full" justifyContent={"space-between"} space={3}>
					<Skeleton w={"1/2"} h={12} rounded="full" />
					<Skeleton w={"1/2"} h={12} rounded={"full"} />
				</HStack>
			</VStack>
		</ScrollView>
	);
}
