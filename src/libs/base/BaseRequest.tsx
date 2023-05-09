import axios, { AxiosRequestConfig } from "axios";

import { appConfig } from "../../settings";

// import settings from "../../../app-settings";

export interface RequestConfig extends Partial<AxiosRequestConfig> {
	routeParams?: string;
}

export interface RequestConfigParamsRequired extends RequestConfig {
	routeParams: string;
}

export type PayloadTypes = FormData | object;

export default class BaseRequest {
	baseUrl = appConfig.API_URL;
	public endpointUrl;
	private onError: (err: Error | any) => any;
	private token?: string;
	private language?: string;
	private enableErrors: boolean;
	private showFullResponse: boolean;
	private basicEndpointUrl: string;

	constructor(endpointName: string, onError = (err: any) => {}) {
		this.onError = onError;
		this.endpointUrl = `${this.baseUrl}${endpointName}`;
		this.basicEndpointUrl = this.endpointUrl;
		this.language = "es";
		this.enableErrors = false;
		this.showFullResponse = false;
	}

	setEndpoint = (endpointName: string) => {
		this.endpointUrl = `${this.baseUrl}${endpointName}`;
	};

	resetEndpoint = () => {
		this.endpointUrl = this.basicEndpointUrl;
	};

	setToken = (token: string) => {
		this.token = token;
		return this;
	};

	setErrorsEnabled = (enableErrors: boolean) => {
		this.enableErrors = enableErrors;
		return this;
	};

	setLanguage = (language: string) => {
		this.language = language;
		return this;
	};

	getConfigByUser = (user: any) => {
		if (user?.token) this.setToken(user?.token);
		if (user?.language) this.setLanguage(user?.language);
		return this;
	};

	setShowFullResponse = (showFull: boolean) => {
		this.showFullResponse = showFull;
		return this;
	};

	configurateRequest = (requestConfig: RequestConfig) => {
		const reqConfig: { headers: any } = {
			...requestConfig,
			headers: {
				...requestConfig.headers,
			},
		};

		if (this.token)
			reqConfig.headers["Authorization"] = `Bearer ${this.token}`;
		if (this.language) reqConfig.headers["Accept-Language"] = this.language;

		return reqConfig;
	};

	public async handleErrorResponse(error: unknown) {
		if (this.enableErrors) throw error;
		return this.onError(error);
	}

	public async find({ routeParams = "", ...requestConfig }: RequestConfig) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.get(
				fullUrl,
				this.configurateRequest(requestConfig),
			);

			if (this.showFullResponse) return response;
			return response.data;
		} catch (error) {
			// console.error(error)
			return this.handleErrorResponse(error);
		}
	}

	public async post(
		payload: PayloadTypes,
		{ routeParams = "", ...requestConfig }: RequestConfig,
	) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.post(
				fullUrl,
				payload,
				this.configurateRequest(requestConfig),
			);
			if (this.showFullResponse) return response;
			return response.data;
		} catch (error) {
			return this.handleErrorResponse(error);
		}
	}

	public async destroy({
		routeParams = "",
		...requestConfig
	}: RequestConfigParamsRequired) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.delete(
				fullUrl,
				this.configurateRequest(requestConfig),
			);

			if (this.showFullResponse) return response;
			return response.data;
		} catch (error) {
			return this.handleErrorResponse(error);
		}
	}

	public async update(
		payload: PayloadTypes,
		{ routeParams = "", ...requestConfig }: RequestConfigParamsRequired,
	) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.put(
				fullUrl,
				payload,
				this.configurateRequest(requestConfig),
			);

			if (this.showFullResponse) return response;
			return response.data;
		} catch (error) {
			return this.handleErrorResponse(error);
		}
	}

	public setErrorHanlder(onError: (err: Error | any) => any) {
		this.onError = onError;
		return this;
	}
}
