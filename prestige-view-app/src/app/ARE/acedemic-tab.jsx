"use client"

import { useState } from "react"
import { GraduationCap, ShoppingCart, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/ARE/components/ui/tabs"

import CourseHistoryTab from "../ARE/course-history-tab"
import MarketplaceTab from "../ARE/marketplace-tab"
import PeerSessionsTab from "../ARE/peer-sessions-tab"

export default function AcademicExchange() {
  const [activeTab, setActiveTab] = useState("course-history")

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Academic & Resource Exchange</h1>
          <p className="text-muted-foreground">
            Connect with peers, share resources, and exchange knowledge in our academic community.
          </p>
        </div>

        <Tabs defaultValue="course-history" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="course-history" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Course History</span>
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Resource Marketplace</span>
            </TabsTrigger>
            <TabsTrigger value="peer-sessions" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Peer Sessions</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="course-history">
            <CourseHistoryTab />
          </TabsContent>

          <TabsContent value="marketplace">
            <MarketplaceTab />
          </TabsContent>

          <TabsContent value="peer-sessions">
            <PeerSessionsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
