import React from "react";
import { useAuth } from "./AuthContextProvider";
import useNavigation from "../hooks/useNavigation";
import { Screens } from "../data";

interface Props {
	children: JSX.Element;
}

const Private = ({ children }: Props) => {
	const { auth } = useAuth();
	const { navigate } = useNavigation();
	if (!auth) {
		navigate(Screens.AuthScreen);
	}
	return children;
};

export default Private;
