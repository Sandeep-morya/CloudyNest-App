import {
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
	useContext,
} from "react";
import { KEY } from "../data";
import { getValueFor, remove, save } from "../utlis/secureStorage";

interface AuthProps {
	auth: string | null;
	addAuth: (token: string) => void;
	removeAuth: () => void;
}

const AuthContext = createContext({} as AuthProps);

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthContextProvider = (props: PropsWithChildren) => {
	const [auth, setAuth] = useState<string | null>(null);

	const addAuth = (token: string) => {
		setAuth(token);
		save(KEY, token);
	};

	const removeAuth = () => {
		setAuth(null);
		remove(KEY);
	};

	useEffect(() => {
		getValueFor(KEY).then((result) => setAuth(result));
	}, []);

	return (
		<AuthContext.Provider value={{ auth, addAuth, removeAuth }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
