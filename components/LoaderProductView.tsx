import { HStack, Skeleton, VStack } from "native-base";
import React from "react";

export default function LoaderProductView() {
	return (
		<HStack
			w={"full"}
			h={400}
			space={1}
			justifyContent={"space-between"}
			overflow="hidden">
			<VStack w={20} justifyContent={"space-between"}>
				{[1, 2, 3, 4].map((item, index) => (
					<Skeleton key={index + "pvs-skeleton"} h={90} rounded="md" />
				))}
			</VStack>
			<Skeleton h={400} rounded="md" />
		</HStack>
	);
}
