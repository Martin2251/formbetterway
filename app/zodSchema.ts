import {z} from 'zod'


export const submissionSchema = z.object([
    name: z.string().min(2),
    email:z.string()
])