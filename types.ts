import { ResponsiveValue } from "native-base/lib/typescript/components/types";
import { trending_products } from "./data";
import { ThemeComponentSizeType } from "native-base/lib/typescript/components/types";

export type ProductType = (typeof trending_products)[0];
export type ButtonVariantType = ResponsiveValue<
	"outline" | (string & {}) | "link" | "ghost" | "solid" | "subtle" | "unstyled"
>;
export interface IconType {
	Vector: any;
	name: any;
	iconSize?: ThemeComponentSizeType<"Icon">;
	titleSize?: any;
}

export interface LoginDataType {
	email: string;
	password: string;
}
export interface RegistrationDataType extends LoginDataType {
	name: string;
}
