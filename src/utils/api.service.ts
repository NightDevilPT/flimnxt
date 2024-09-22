import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
	CancelTokenSource,
} from 'axios';

const cancelTokens: { [key: string]: CancelTokenSource | null } = {};

const apiClient: AxiosInstance = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 10000,
});

apiClient.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => config,
	(error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error) => Promise.reject(error)
);

const apiService = {
	get<T>(url: string, config?: AxiosRequestConfig, token?: string): Promise<T> {
		if (cancelTokens[url]) {
			cancelTokens[url]?.cancel(`Request to ${url} canceled due to a new request.`);
		}
		cancelTokens[url] = axios.CancelToken.source();

		const finalConfig = {
			...config,
			headers: {
				...config?.headers,
				Authorization: token ? `Bearer ${token}` : undefined,
			},
			cancelToken: cancelTokens[url]?.token,
		};

		return apiClient.get(url, finalConfig)
			.then((res) => {
				cancelTokens[url] = null;
				return res.data;
			})
			.catch((error) => {
				cancelTokens[url] = null;
				throw error;
			});
	},

	post<T>(url: string, data: any, config?: AxiosRequestConfig, token?: string): Promise<T> {
		const finalConfig = {
			...config,
			headers: {
				...config?.headers,
				Authorization: token ? `Bearer ${token}` : undefined,
			},
		};
		return apiClient.post(url, data, finalConfig).then((res) => res.data);
	},

	put<T>(url: string, data: any, config?: AxiosRequestConfig, token?: string): Promise<T> {
		const finalConfig = {
			...config,
			headers: {
				...config?.headers,
				Authorization: token ? `Bearer ${token}` : undefined,
			},
		};
		return apiClient.put(url, data, finalConfig).then((res) => res.data);
	},

	delete<T>(url: string, config?: AxiosRequestConfig, token?: string): Promise<T> {
		const finalConfig = {
			...config,
			headers: {
				...config?.headers,
				Authorization: token ? `Bearer ${token}` : undefined,
			},
		};
		return apiClient.delete(url, finalConfig).then((res) => res.data);
	},
};

export default apiService;
