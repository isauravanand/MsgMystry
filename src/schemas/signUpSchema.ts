import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3,"Username Must be Atlest 3 Characters")
    .max(20,"Username Must be Under 20 Characters")
    .regex(/^[a-zA-Z0-9_]{3,20}$/,"Username Must not Contain special Characters")


export const signUpValidation = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid Email Address"}),
    password:z.string().min(6,{message:"Passoword Must be atleast 6 character long"})
})