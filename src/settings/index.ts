export const isClientSide = typeof window !== "undefined";
export const localStoragePrefix = "cataloger-";
export const appConfig = {
  isClientSide,
  localStorageKeys: {
    user: localStoragePrefix + "user",
    company: localStoragePrefix + "companies",
    selectedCompany: localStoragePrefix + "selected-companie",
  },
  API_URL: "http://localhost:8000",
  // HIDE APP BAR AND DRAWER
  NAVBAR_HIDDED_ROUTES: ["/login"],
  FALLBACK_LANGUAGE: "es",
  // NAVBAR VISIBLE ROUTES
};
