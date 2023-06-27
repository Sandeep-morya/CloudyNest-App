import { ResponsiveValue } from "native-base/lib/typescript/components/types";
import { trending_products } from "./data";
import { ThemeComponentSizeType } from "native-base/lib/typescript/components/types";

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

export interface UserType {
	_id: string;
	name: string;
	email: string;
	mobile: string;
	address: string[];
	isPrime: boolean;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface ProductType {
	_id: string;
	title: string;
	brand: string;
	description: string;
	thumbnail: string;
	images: string[];
	price: number;
	tags: string[];
	quantity: number;
	discount: number;
	seller: string;
	rating: number;
	assured: boolean;
	is_for: string;
	for_gender: string;
	for_age: string;
	sizes: string[];
	__v: number;
	createdAt: string;
	updatedAt: string;
}

export interface CartItemType {
	id: string;
	title: string;
	count: number;
	price: number;
	seller: string;
}
