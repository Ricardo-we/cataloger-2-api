import { loginResultAdapter } from "../UsersService/userDataAdapter";

export const userCatalogsAdapter = (fullCatalog: any) => ({
    user: loginResultAdapter(fullCatalog?.user),
    catalogs: fullCatalog?.catalogs
})