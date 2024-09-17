"use server"

import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"
import { submissionSchema } from "./zodSchema"

// store our server actions 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function TalkToSalesAction(prevState:any,formData:FormData){

    const submission = parseWithZod(formData,{
        schema:submissionSchema,
    })

    if(submission.status !== "success"){
        return submission.reply();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch(process.env.TALK_TO_SALES_URL!,{
        method: 'POST',
        body:formData
    })


    if(!response.ok){
        throw new Error("Something went wrong")
    }

    return redirect("/success")
}