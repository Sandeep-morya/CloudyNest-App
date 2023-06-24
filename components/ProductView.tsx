import { View, Text } from "react-native";
import { useState } from "react";
import { AspectRatio, HStack, Image, Pressable, VStack } from "native-base";
interface Props {
	images: string[];
}

export default function ProductView({ images }: Props) {
	const [thumbnail, setThumbnail] = useState(0);

	return (
		<HStack
			w={"full"}
			h={400}
			space={1}
			justifyContent={"space-between"}
			overflow="hidden">
			<VStack w={20} justifyContent={"space-between"}>
				{images.map((item, index) => (
					<Pressable
						key={item}
						borderColor={index === thumbnail ? "gray.600" : "gray.300"}
						borderWidth={"1"}
						borderRadius={"md"}
						onPress={() => setThumbnail(index)}>
						<Image
							w="full"
							style={{ aspectRatio: 5 / 6 }}
							resizeMode="cover"
							borderRadius={"md"}
							source={{ uri: item }}
							alt={""}
						/>
					</Pressable>
				))}
			</VStack>
			<Image
				h={400}
				style={{ aspectRatio: 5 / 6 }}
				resizeMode="cover"
				borderColor={"gray.300"}
				borderWidth={"1"}
				borderRadius={"md"}
				source={{ uri: images[thumbnail] }}
				alt={images[thumbnail]}
			/>
		</HStack>
	);
}
