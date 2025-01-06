import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Define a Plan type
type Plan = {
    name: string;
    download: string;
    upload: string;
    price: number;
    staticIpPrice: number;
  };
  
  const plans: Plan[] = [
    { name: "FAST", download: "80 Mbps", upload: "20 Mbps", price: 33, staticIpPrice: 35 },
    { name: "SUPER FAST", download: "160 Mbps", upload: "30 Mbps", price: 39, staticIpPrice: 41 },
    { name: "ULTRA FAST", download: "360 Mbps", upload: "72 Mbps", price: 56, staticIpPrice: 58 },
    { name: "MEGA FAST", download: "900 Mbps", upload: "180 Mbps", price: 67, staticIpPrice: 69 },
  ];
  
  // Function to render the table
  function PlanTable({ plans, isStaticIp }: { plans: Plan[], isStaticIp: boolean }) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plan</TableHead>
            <TableHead>Download</TableHead>
            <TableHead>Upload</TableHead>
            <TableHead>Price/Month</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan) => (
            <TableRow key={plan.name}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>{plan.download}</TableCell>
              <TableCell>{plan.upload}</TableCell>
              <TableCell>
                £{isStaticIp ? plan.staticIpPrice : plan.price}.00
                {isStaticIp && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 ml-1 inline-block text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Includes £2/month for Static IP</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </TableCell>
              <TableCell>
                <Button>Choose Plan</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  
export default function FibreInternet() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fibre Internet Plans</h2>
        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="standard">Standard Plans</TabsTrigger>
            <TabsTrigger value="staticip">Plans with Static IP</TabsTrigger>
          </TabsList>
          <TabsContent value="standard">
            <PlanTable plans={plans} isStaticIp={false} />
          </TabsContent>
          <TabsContent value="staticip">
            <PlanTable plans={plans} isStaticIp={true} />
          </TabsContent>
        </Tabs>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Additional Information</h3>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>All plans come with a 12-month contract</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>£40 activation fee for new connections (Free for transfers from existing open fibre network properties)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Optional VoIP number available for £6/month (£10 one-time setup fee)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Static IP available for an additional £2/month</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

