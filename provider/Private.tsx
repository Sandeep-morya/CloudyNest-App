import React from "react";
import { useAuth } from "./AuthContextProvider";
import useNavigation from "../hooks/useNavigation";
import { Screens } from "../data";

interface Props {
	children: JSX.Element;
}

const Private = ({ children }: Props) => {
	const { isAuth } = useAuth();
	const { navigate } = useNavigation();
	if (!isAuth) {
		navigate(Screens.AuthScreen);
	}
	return children;
};

export default Private;
