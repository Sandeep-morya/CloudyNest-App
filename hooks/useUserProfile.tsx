import React, { useState, useCallback, useEffect } from "react";
import { useAuth } from "../provider/AuthContextProvider";
import API from "../utlis/api";
import { UserType } from "../types";

const useUserProfile = () => {
	const [userData, setUserData] = useState<UserType>();
	const { auth } = useAuth();

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
				setUserData(data);
			} catch (error) {
				// console.log(error);
			}
		},
		[auth],
	);
	useEffect(() => {
		getUser();
	}, [getUser]);

	return userData;
};

export default useUserProfile;
