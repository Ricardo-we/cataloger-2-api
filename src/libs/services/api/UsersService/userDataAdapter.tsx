import User from "@/types/User"

export const userLoginInitialValue = {
    email: "",
    password: "",
}

export function createUserAdapter(userData: any){
    return {
        username: userData?.username,
        password: userData?.password,
        email: userData?.email,
        full_name: userData?.fullName
    }
}

export function loginResultAdapter(loginResult: any){
    return {    
        ...loginResult,
        fullName: loginResult.full_name,
        isActive: loginResult.is_active,
        createdAt: loginResult.created_at,
        created_at: undefined,
        is_active: undefined,
        full_name: undefined,
    } as User
}