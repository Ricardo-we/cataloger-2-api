import BaseRequest, { RequestConfig } from "../../../base/BaseRequest";

import User, { } from "../../../../types/User";
import { appConfig } from "../../../../settings";
import { createUserAdapter, loginResultAdapter } from "./userDataAdapter";

const endpointName = `/users`;

export default class UsersService extends BaseRequest {
	public request: BaseRequest;

	constructor(onError?: (error?: any) => any) {
		super(endpointName, onError);
		this.request = new BaseRequest(endpointName, onError);
	}

	login = async (userData: { email: string, password: string }) => {
		const response = await this.post(userData, {
			routeParams: "/login"
		})
		return loginResultAdapter(response);
	}

	signUp = async (userData: User) => {
		const userAdaptedData = createUserAdapter(userData);
		const response = await this.post(userAdaptedData, {
			routeParams: "/sign-up"
		});
		return response;
	}

	confirmUserCode = async (confirmationCode: string,) => {
		const response = await this.post({ code: confirmationCode }, {routeParams: `/confirm-user`});
		return response;
	}

}
