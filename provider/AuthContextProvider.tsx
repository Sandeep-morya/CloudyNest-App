import {
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
	useContext,
	useCallback,
} from "react";
import { KEY } from "../data";
import { getValueFor, remove, save } from "../utlis/secureStorage";
import API from "../utlis/api";
import { UserType } from "../types";

interface AuthProps {
	auth: string | null;
	user: UserType | undefined;
	addAuth: (token: string) => void;
	removeAuth: () => void;
}

const AuthContext = createContext({} as AuthProps);

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthContextProvider = (props: PropsWithChildren) => {
	const [auth, setAuth] = useState<string | null>(null);
	const [user, setUser] = useState<UserType>();

	const addAuth = (token: string) => {
		setAuth(token);
		save(KEY, token);
	};

	const removeAuth = () => {
		setAuth(null);
		remove(KEY);
	};

	const getUser = useCallback(
		async function () {
			try {
				// :: if verifaction failed it will go in catch ::
				if (!auth) {
					return;
				}

				const { data } = await API.get("/user/profile", {
					headers: { Authorization: auth },
				});
				setUser(data);
			} catch (error) {
				// console.log(error);
			}
		},
		[auth],
	);

	useEffect(() => {
		getValueFor(KEY).then((result) => setAuth(result));
	}, []);

	useEffect(() => {
		getUser();
	}, [getUser]);

	return (
		<AuthContext.Provider value={{ auth, user, addAuth, removeAuth }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
