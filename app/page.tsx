"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { TalkToSalesAction } from "./actions";
import { SubmitButton } from "./components/SubmitButton";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./zodSchema";


export default function Home() {
  const [salesResult, salesAction] = useFormState(TalkToSalesAction,undefined)
  // in next 15 useFormState is useActionState

  const [salesForm, salesFields] = useForm({
    lastResult:salesResult,

    onValidate({formData}){
      return parseWithZod(formData,{schema:submissionSchema})
    }, 

    shouldValidate:'onBlur',
    shouldRevalidate:"onInput",
  })
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center px-5">
     <h1 className="text-4xl font-bold mb-7">Contact us</h1>
     <Card className="max-w-[500px] w-full">
      <Tabs defaultValue="sales">
        <CardContent className="mt-5">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="sales">
             Talk to Sales
            </TabsTrigger>
            <TabsTrigger value="support">
              Suppoer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sales">
            <p className="text-muted-foreground text-sm">You want to integrate your product with us ? We can help you please contact us down below.</p>
            <form id={salesForm.id}  onSubmit={salesForm.onSubmit} noValidate className="flex flex-col gap-y-4 mt-5" action={salesAction}>
            <input type="hidden" name="_gotcha" /> 
              <div className="grid space-y-1">
                <Label>Name</Label>
                <Input placeholder="john doe" name={salesFields.name.name} defaultValue={salesFields.name.initialValue} key={salesFields.name.key} />
                <p className="text-red-500 text-sm">{salesFields.name.errors}</p>
             

              </div>
              <div className="grid space-y-1">
                <Label>Email</Label>
                <Input name={salesFields.email.name} key={salesFields.email.key} defaultValue={salesFields.email.initialValue} placeholder="john.doe@example.com"  />
                <p className="text-red-500 text-sm">{salesFields.email.errors}</p>
              </div>
              <div className="grid space-y-1">
                <Label>Question or Problem</Label>
                <Textarea className="h-32" placeholder="please share some details about your needs" name={salesFields.message.name} key={salesFields.message.key} defaultValue={salesFields.message.initialValue}/>
                <p className="text-red-500 text-sm">{salesFields.message.errors}</p>
              </div>
              <SubmitButton />
            </form>
          </TabsContent>
          <TabsContent value="support">
            <p className="text-muted-foreground text-sm">Troubleshoot a technical issue or payment problem </p>
            <form className="flex flex-col gap-y-4 mt-5">
            <input type="hidden" name="_gotcha" /> 
              <div className="grid space-y-1">
                <Label>Name</Label>
                <Input placeholder="John Doe"  />
              </div>

              <div className="grid space-y-1">
                <Label>Email</Label>
                <Input placeholder="John.Doe@example.com" />
              </div>
              <div className="grid space-y-1">
                <Label>Problem</Label>
                <Textarea placeholder="what is wrong" className="h-32" />
                </div>
                <div className="grid space-y-1">
                  <Label>Asset</Label>
                  <Input type="file" />
                </div>
                <Button>Submit</Button>
            </form>
          </TabsContent>


        </CardContent>
      </Tabs>
     </Card>
    </section>
  );
}
