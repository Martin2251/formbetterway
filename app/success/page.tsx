import { CheckIcon } from "lucide-react";

export default function SuccessRoute(){
    return(
        <section className="h-screen w-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                <div>
                    <CheckIcon className="size-10 text-green-500"  />
                </div>
            </div>
        </section>
    )
}