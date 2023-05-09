import { ProfileTypes } from "../types/Profile";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { validProfilesDict } from "../settings/data/validProfilesDict";

export function useValidProfiles(validProfiles: ProfileTypes[], redirectTo?: object | any){
    const router = useRouter();
    const user = useSelector((state: any) => state?.user?.user);
    const userProfile = user?.profile?.name
    const realValidProfiles = validProfiles?.map(profile => validProfilesDict[profile]);
    const isAuthorizedToRoute = realValidProfiles?.includes(userProfile);

    useEffect(() => {
        if(!isAuthorizedToRoute && redirectTo !== undefined && redirectTo?.[userProfile]) 
            router.push(redirectTo[userProfile], undefined, { shallow: true });        
    }, [])

    return isAuthorizedToRoute;
}
