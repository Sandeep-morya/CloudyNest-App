import {
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
	useContext,
} from "react";
import { KEY } from "../data";
import * as SecureStore from "expo-secure-store";

interface AuthProps {
	isAuth: boolean;
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext({} as AuthProps);

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = (props: PropsWithChildren) => {
	const [isAuth, setIsAuth] = useState(true);

	console.log({ isAuth });

	useEffect(() => {
		SecureStore.getItemAsync(KEY).then((result) => {
			result ? setIsAuth(true) : setIsAuth(false);
		});
	}, []);

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
