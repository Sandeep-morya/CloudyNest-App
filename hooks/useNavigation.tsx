import { useNavigation as navigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductType } from "../types";
type StackParamList = {
	home: undefined;
	auth: undefined;
	drawer: undefined;
	products: { category: string };
	"product-details": { data: ProductType };
	cart: undefined;
	checkout: undefined;
	payment: undefined;
};
export default function useNavigation() {
	return navigation<StackNavigationProp<StackParamList>>();
}
