import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Home() {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center px-5">
     <h1 className="text-4xl font-bold">Contact us</h1>
     <Card className="max-w-[500px] w-full">
      <Tabs defaultValue="sales">
        <CardContent>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="sales">
             Talk to Sales
            </TabsTrigger>
            <TabsTrigger value="support">
              Suppoer
            </TabsTrigger>
          </TabsList>
        </CardContent>
      </Tabs>
     </Card>
    </section>
  );
}
