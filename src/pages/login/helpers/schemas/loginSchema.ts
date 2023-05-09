import { StringValidator } from "@/libs/utils/validators/StringValidator";
import * as yup from "yup";

export const loginSchema = (language: any) => yup.object({
    email: new StringValidator("email",language).required().email().build(),
    password: new StringValidator("password", language).required().build(),
})