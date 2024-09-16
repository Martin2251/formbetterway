import { CheckIcon } from "lucide-react";

export default function SuccessRoute(){
    return(
        <section className="h-screen w-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                <div className="flex size-20 items-center justify-center rounded-full bg-green-400/10">
                    <CheckIcon className="size-10 text-green-500"  />
                </div>
                <h2 className="mt-6 text-xl font-semibold">Success we got your message</h2>
            </div>
        </section>
    )
}