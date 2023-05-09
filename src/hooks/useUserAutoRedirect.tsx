import { FC, useEffect } from "react";
import { useUser } from "./useUser";
import { useRouter } from "next/router";


const useUserAutoRedirect = () => {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
		if(user !== undefined && user?.token)
			router.push("/home");
	}, [user, router])

    return user;
}

export default useUserAutoRedirect;