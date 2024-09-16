"use server"

// store our server actions 

export async function TalkToSalesAction(formData:FormData){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch(process.env.TALK_TO_SALES_URL!,{
        method: 'POST',
        body:formData
    })
}