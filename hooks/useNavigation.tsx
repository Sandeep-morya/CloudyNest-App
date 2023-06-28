import { useNavigation as navigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AddressType, CartItemType, ProductType } from "../types";
type StackParamList = {
	home: undefined;
	auth: undefined;
	drawer: undefined;
	products: { category: string };
	"product-details": { id: string | number };
	cart: undefined;
	checkout: { items: CartItemType[] };
	payment: { items: CartItemType[]; address: AddressType };
};
export default function useNavigation() {
	return navigation<StackNavigationProp<StackParamList>>();
}
