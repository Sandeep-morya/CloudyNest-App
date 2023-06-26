import { useState, useEffect, useCallback } from "react";
import { ProductType } from "../types";
import API from "../utlis/api";

const useGetItemById = (id: string) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [product, setProduct] = useState<ProductType>();

	const getProductById = useCallback(async () => {
		setIsLoading(true);
		try {
			const { data } = await API.get(`product/${id}`);
			setProduct(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
	}, [id]);

	useEffect(() => {
		getProductById();
	}, []);
	return { isLoading, isError, product };
};

export default useGetItemById;
