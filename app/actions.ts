"use server"

import { redirect } from "next/navigation"

// store our server actions 

export async function TalkToSalesAction(formData:FormData){
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