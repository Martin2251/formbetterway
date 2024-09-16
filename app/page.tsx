import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Home() {
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
            <form>
              <div className="grid space-y-1">
                <Label>Name</Label>

              </div>
            </form>
          </TabsContent>
        </CardContent>
      </Tabs>
     </Card>
    </section>
  );
}
