import { StringValidator } from "@/libs/utils/validators/StringValidator";
import * as yup from "yup";

export const signUpSchema = (language: any) => yup.object({
    username: new StringValidator("username",language).required().min(3).max(400).build(), 
    email: new StringValidator("email",language).required().email().build(),
    password: new StringValidator("password", language).required().min(3).max(400).build(),
    fullName: new StringValidator("fullname", language).required().min(1).max(500).build(),
})