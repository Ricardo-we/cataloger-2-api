import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
  languages: [] as any[],
  selectedLanguage: {
    selectedLangName: "es",
    fixedLanguage: {} as any,
  },
};

const languageSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    changeLanguages: (
      state,
      action: PayloadAction<Partial<any>[]>
    ) => {
      state.languages = action.payload;
      // if (appConfig.isClientSide)
      // 	localStorage.setItem(
      // 		appConfig.localStorageKeys.user,
      // 		JSON.stringify(state.user),
      // 	);
      return state;
    },
    changeSelectedLanguage: (state, action: PayloadAction<any>) => {
      state.selectedLanguage.fixedLanguage = action.payload;
      return state;
    },
    changeSelectedLangName: (state, action: PayloadAction<string>) => {
      state.selectedLanguage.selectedLangName = action.payload;
      return state;
    },
  },
});

export const {
  changeLanguages,
  changeSelectedLanguage,
  changeSelectedLangName,
} = languageSlice.actions;
export default languageSlice.reducer;
