import { Image, View } from "native-base";
import React from "react";
import Swiper from "react-native-swiper";
import { Ads } from "../data";

export default function Carousel() {
	return (
		<View height={200} my={5}>
			<Swiper
				horizontal
				loop
				autoplay
				showsPagination={false}
				showsButtons={false}>
				{Ads.map((e) => (
					<Image
						key={e}
						flex={1}
						resizeMode="cover"
						source={{ uri: e }}
						alt="post"
					/>
				))}
			</Swiper>
		</View>
	);
}
