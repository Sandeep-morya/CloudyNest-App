import { CartItemType } from "../types";

export const checkItemExistsInCart = (
	items: CartItemType[],
	currentItemID: string | number | undefined,
) => items.some((item) => item.id === currentItemID);
