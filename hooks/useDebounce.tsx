import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number = 700) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const id = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(id);
		};
	}, [value]);

	return debouncedValue;
}
export default useDebounce;
