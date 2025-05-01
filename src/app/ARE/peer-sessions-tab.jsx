import { Calendar, Clock, Filter, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/ARE/components/ui/avatar"
import { Badge } from "@/app/ARE/components/ui/badge"
import { Button } from "@/app/ARE/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ARE/components/ui/card"
import { Input } from "@/app/ARE/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/ARE/components/ui/select"

export default function PeerSessionsTab() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search by subject or tutor..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Session Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sessions</SelectItem>
              <SelectItem value="tutoring">Tutoring</SelectItem>
              <SelectItem value="career">Career Advice</SelectItem>
              <SelectItem value="skills">Skill Sharing</SelectItem>
              <SelectItem value="group">Group Study</SelectItem>
            </SelectContent>
          </Select>
          <Button>Offer Session</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SessionCard
          title="Data Structures Tutoring"
          type="Tutoring"
          description="One-on-one help with assignments and concepts"
          tutor={{
            name: "Emily M.",
            avatar: "EM",
            description: "CS Teaching Assistant, 4.9★",
          }}
          schedule="Available Mon, Wed, Fri"
          duration="60 min sessions"
          price="$25 per session"
          course="CS 301"
        />

        <SessionCard
          title="Tech Interview Prep"
          type="Career"
          description="Mock interviews and feedback for CS roles"
          tutor={{
            name: "David K.",
            avatar: "DK",
            description: "CS Junior, 4.8★",
          }}
          schedule="Available Weekends"
          duration="90 min sessions"
          price="$40 per session"
          course="CS"
        />

        <SessionCard
          title="Python Programming Workshop"
          type="Group Study"
          description="Learn Python basics in a collaborative environment"
          tutor={{
            name: "Sarah L.",
            avatar: "SL",
            description: "CS Junior, Python Enthusiast, 4.7★",
          }}
          schedule="Every Tuesday, 6-8 PM"
          duration="120 min sessions"
          price="$15 per session"
          course="CS 101"
          buttonText="Join Group"
        />

        <SessionCard
          title="Calculus Study Group"
          type="Group Study"
          description="Weekly problem-solving sessions for Calculus I"
          tutor={{
            name: "James T.",
            avatar: "JT",
            description: "Math Major, 4.6★",
          }}
          schedule="Every Thursday, 5-7 PM"
          duration="120 min sessions"
          price="Free"
          course="MATH 101"
          buttonText="Join Group"
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button variant="outline">View More Sessions</Button>
      </div>
    </div>
  )
}

function SessionCard({
  title,
  type,
  description,
  tutor,
  schedule,
  duration,
  price,
  course,
  buttonText = "Book Session",
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge>{type}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Tutor" />
            <AvatarFallback>{tutor.avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{tutor.name}</p>
            <p className="text-xs text-muted-foreground">{tutor.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{schedule}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>{price}</span>
          <Badge variant="outline" className="ml-auto">
            {course}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}
