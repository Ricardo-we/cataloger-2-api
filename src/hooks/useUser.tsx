import { safeJsonParse } from "@/libs/utils/general";
import { changeUser } from "@/redux/slices/user.slice";
import { appConfig } from "@/settings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useUser(){
    const user = useSelector((state: any) => state?.user?.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const localStorageUser = safeJsonParse(localStorage.getItem(appConfig.localStorageKeys.user));
        if((!user || !user?.token) && localStorageUser?.token){
            dispatch(changeUser(localStorageUser));
        }
    }, [user])

    return user;
}