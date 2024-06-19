import { object, string } from "yup";

export const signupSchema = object({
    name: string().min(3, "must be more than 3 chars").required("must not be empty!"),
    username: string().min(3, "must be more that 3 chars").required("must not be empty!"),
    email: string().email("must be valid email").required("must not be empty!"),
    password: string().min(8, "must be atleast 8 chars").required("must not be empty!")
})


export const signinSchema = object({
    email: string().email("must be valid email").required("must not be empty!"),
    password: string().min(8, "must be atleast 8 chars").required("must not be empty!")
})