import Image from "next/image"
import { Book, Filter, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/ARE/components/ui/avatar"
import { Badge } from "@/app/ARE/components/ui/badge"
import { Button } from "@/app/ARE/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ARE/components/ui/card"
import { Input } from "@/app/ARE/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/ARE/components/ui/select"

export default function MarketplaceTab() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search resources..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Resource Type" />
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="all">All Resources</SelectItem>
              <SelectItem value="textbooks">Textbooks</SelectItem>
              <SelectItem value="notes">Course Notes</SelectItem>
              <SelectItem value="equipment">Lab Equipment</SelectItem>
              <SelectItem value="digital">Digital Resources</SelectItem>
            </SelectContent>
          </Select>
          <Button>List Resource</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ResourceCard
          title="Data Structures & Algorithms"
          type="Textbook"
          description="4th Edition, Cormen et al."
          price="$45.00"
          priceNote="or trade for similar value"
          course="CS 301"
          seller={{ name: "Michael S.", avatar: "MS" }}
        />

        <ResourceCard
          title="Calculus: Early Transcendentals"
          type="Textbook"
          description="8th Edition, James Stewart"
          price="$35.00"
          priceNote="minor highlighting"
          course="MATH 101"
          seller={{ name: "Alex L.", avatar: "AL" }}
        />

        <ResourceCard
          title="Machine Learning Course Notes"
          type="Digital"
          description="Complete notes for CS 450"
          price="Free"
          priceNote="PDF format, 120 pages"
          course="CS 450"
          seller={{ name: "Jane D.", avatar: "JD" }}
          buttonText="Connect"
        />

        <ResourceCard
          title="TI-84 Plus Graphing Calculator"
          type="Equipment"
          description="Lightly used, all accessories included"
          price="$60.00"
          priceNote="or rent for $15/month"
          course="MATH"
          seller={{ name: "Ryan J.", avatar: "RJ" }}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button variant="outline">View More Resources</Button>
      </div>
    </div>
  )
}

function ResourceCard({ title, type, description, price, priceNote, course, seller, buttonText = "Contact" }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="secondary">{type}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-[4/3] relative mb-2">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt={`${title} image`}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">{price}</p>
            <p className="text-xs text-muted-foreground">{priceNote}</p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Book className="h-3 w-3" />
            {course}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <div className="flex items-center text-sm text-muted-foreground">
          <Avatar className="h-6 w-6 mr-1">
            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Seller" />
            <AvatarFallback>{seller.avatar}</AvatarFallback>
          </Avatar>
          {seller.name}
        </div>
        <Button size="sm">{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}
