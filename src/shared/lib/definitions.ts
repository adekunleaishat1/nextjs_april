
import {z} from "zod"

export const signupSchema = z.object({
    name:z.string().min(3,{message:"Name cannot be less than 3 characters"}).trim(),
    email:z.string().email({ message: 'Please enter a valid email.'}).trim(),
    password:z.string().min(8,{ message: 'Be at least 8 characters long' }).regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    }).trim()
})


export type signupSchematype = z.infer<typeof signupSchema>