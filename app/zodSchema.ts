import {z} from 'zod'


export const submissionSchema = z.object([
    name: z.string().min(2),
    email:z.string().email(),
    message:z.string().min(2).max(1500),
    image:z.instanceof(File).optional(),
])