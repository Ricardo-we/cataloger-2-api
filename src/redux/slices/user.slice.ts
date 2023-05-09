import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AvailableLanguages } from "../../types/AvailableLanguages";
import User from "../../types/User";
import { appConfig } from "../../settings";
import { safeJsonParse } from "../../libs/utils/general";

const initialState = {
	user: {
		language: "es",
		// ...safeJsonParse(
		// 	typeof window !== undefined
		// 		? localStorage.getItem(appConfig.localStorageKeys.user)
		// 		: "{}",
		// ),
	} as Partial<User>,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		changeUser: (state, action: PayloadAction<Partial<User>>) => {
			state.user = { ...state.user, ...action.payload };
			if (window !== undefined)
				localStorage.setItem(
					appConfig.localStorageKeys.user,
					JSON.stringify(state.user),
				);
			return state;
		},
		changeUserLanguage: (state, action: PayloadAction<AvailableLanguages>) => {
			state.user.language = action.payload;

			return state;
		},
	},
});

export const { changeUser, changeUserLanguage } = userSlice.actions;
export default userSlice.reducer;
