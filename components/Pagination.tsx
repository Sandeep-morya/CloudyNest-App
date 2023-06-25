import { FlatList, Button } from "native-base";
import { Dispatch, SetStateAction } from "react";

interface Props {
	totalPages: number;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ totalPages, page, setPage }: Props) {
	return (
		<FlatList
			data={Array.from({ length: totalPages })}
			renderItem={({ item, index }) => (
				<Button
					colorScheme={"teal"}
					variant={index + 1 === page ? "solid" : "subtle"}
					px={4}
					shadow={2}
					onPress={() => setPage(index + 1)}
					size={"lg"}>
					{index + 1}
				</Button>
			)}
			keyExtractor={(_, index) => index + "pagintation-btns"}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				columnGap: 10,
				padding: 10,
			}}
		/>
	);
}
