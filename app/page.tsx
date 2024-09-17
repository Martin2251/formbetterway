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


export default function Home() {
  const [salesResult, salesAction] = useFormState(TalkToSalesAction,undefined)
  // in next 15 useFormState is useActionState

  const [salesForm, salesField] = useForm({
    lastResult:salesResult,

    onValidate({formData}){
      return parseWithZod
    }
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
            <form className="flex flex-col gap-y-4 mt-5" action={salesAction}>
            <input type="hidden" name="_gotcha" /> 
              <div className="grid space-y-1">
                <Label>Name</Label>
                <Input placeholder="john doe" name="name"></Input>
             

              </div>
              <div className="grid space-y-1">
                <Label>Email</Label>
                <Input placeholder="john.doe@example.com" name="email" />

              </div>
              <div className="grid space-y-1">
                <Label>Question or Problem</Label>
                <Textarea className="h-32" placeholder="please share some details about your needs" name="message"/>
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
