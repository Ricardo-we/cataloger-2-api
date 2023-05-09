import { AvailableLanguages } from "./AvailableLanguages";

type User = {
    username: string;
    password: string;
    email: string;
    fullName: string;
    createdAt: Date | string;
    isActive: boolean;
    language?: AvailableLanguages;
}

export default User;