import {
	QueryFunction,
	QueryKey,
	UseQueryOptions,
	useMutation,
	useQuery,
	useQueryClient,
} from "react-query";
import { useEffect, useState } from "react";

import User from "../types/User";

interface useRequestOptions {
	refetchDeps?: any[];
	user?: User | any;
}

type QueryTuple = [string, ...any[]];

export function useFetcher(
	queryKey: QueryKey,
	// dataFetchingCb: () => Promise<any>,
	dataFetchingCb: QueryFunction,
	options?: Omit<UseQueryOptions<any, any, any, QueryKey>, "queryKey" | "queryFn">,
) {
	const query = useQuery(queryKey, dataFetchingCb, options);
	return query;
}

// export function useRequest(service: () => Promise<any>, {refetchDeps=[], user}: useRequestOptions){
//     const {} = useQuery
//     // const [responseData, setResponseData] = useState<any>();

//     // useEffect(() => {
//     //     service()
//     //         ?.then(data => setResponseData(data))
//     // }, [refetchDeps])

//     // return [responseData, setResponseData];
// }
