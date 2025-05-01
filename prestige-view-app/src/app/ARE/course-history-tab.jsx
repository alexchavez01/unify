"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/ARE/components/ui/avatar";
import { Badge } from "@/app/ARE/components/ui/badge";
import { Button } from "@/app/ARE/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ARE/components/ui/card";
import { Input } from "@/app/ARE/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/ARE/components/ui/select";
import { BookOpen, ChevronRight, Filter, Search, Star, Users } from "lucide-react";

export default function CourseHistoryTab() {
  const [viewMode, setViewMode] = useState("my-profile");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const userProfile = {
    id: 0,
    name: "Jane Doe",
    avatar: "JD",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    major: "Computer Science",
    classYear: "Class of 2025",
    expertise: ["AI & Machine Learning", "Cybersecurity", "UX/UI Design", "Data Science"],
    description: {
      academicInterests: [
        "AI & Machine Learning",
        "Cybersecurity & Ethical Hacking",
        "UX/UI Design & Accessibility",
        "Data Science & Analytics",
      ],
      careerGoals: [
        "Cybersecurity Analyst",
        "Tech Policy & Ethics",
        "Startup & Entrepreneurship",
        "Software Development Internships",
      ],
      extracurriculars: [
        "Women in STEM Club",
        "Tech Literacy Volunteer",
        "Hackathons & Coding Competitions",
        "Tech & Society Podcasting",
      ],
      demographics: ["Female", "First-Gen", "Speaks English & French"],
    },
  };

  const myCourseHistory = [
    {
      year: "2024-2025",
      term: "Current Semester",
      courses: [
        {
          name: "CS 320: UI Design",
          grade: "A",
          professor: "Prof. John",
          term: "Spring 2025",
          description: "Introduction to User Interface design principles and practices.",
        },
        {
          name: "Math 130: Math. Computing",
          grade: "A-",
          professor: "Prof. Smith",
          term: "Spring 2025",
          description: "Explores mathematical concepts applied to computing.",
        },
        {
          name: "CS 350: Advanced UI Design",
          grade: "B+",
          professor: "Prof. Johnson",
          term: "Spring 2025",
          description: "Continuation of UI design with focus on advanced features.",
        },
      ],
    },
    {
      year: "2023-2024",
      term: "Previous Year",
      courses: [
        {
          name: "CS 220: UI Design",
          grade: "A",
          professor: "Prof. Davis",
          term: "Fall 2023",
          description: "Intro to basic UI design concepts and tools.",
        },
        {
          name: "Math 120: Calc A",
          grade: "A-",
          professor: "Prof. Wilson",
          term: "Fall 2023",
          description: "Basic calculus with applications.",
        },
      ],
    },
    {
      year: "2022-2023",
      term: "First Year",
      courses: [
        {
          name: "CS 100: Intro to Programming",
          grade: "A",
          professor: "Prof. Miller",
          term: "Fall 2022",
          description: "Foundations of programming concepts.",
        },
        {
          name: "Math 100: Pre-Calc",
          grade: "A-",
          professor: "Prof. Taylor",
          term: "Fall 2022",
          description: "Precalculus topics including functions, equations, and graphs.",
        },
      ],
    },
  ];

  const otherStudents = [
    {
      id: 1,
      name: "Bob Smith",
      avatar: "AJ",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      major: "Electrical Engineering",
      classYear: "Class of 2024",
      expertise: ["Circuit Design", "Signal Processing", "Embedded Systems"],
      description: {
        academicInterests: ["Circuit Design", "Signal Processing", "Embedded Systems", "Renewable Energy"],
        careerGoals: ["Hardware Engineer", "Robotics Specialist", "Energy Systems Engineer", "IoT Developer"],
        extracurriculars: ["Robotics Club", "IEEE Student Chapter", "Engineering Competitions", "Maker Space Volunteer"],
        demographics: ["Male", "Transfer Student", "Speaks English & Spanish"],
      },
      courseHistory: [
        {
          year: "2023-2024",
          term: "Current Year",
          courses: [
            {
              name: "EE 401: Advanced Circuit Design",
              grade: "A",
              professor: "Prof. Lee",
              term: "Spring 2024",
              description: "Advanced concepts in circuit design.",
            },
            {
              name: "EE 450: Digital Signal Processing",
              grade: "A-",
              professor: "Prof. Chen",
              term: "Spring 2024",
              description: "Processing and analysis of digital signals.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Maria Garcia",
      avatar: "MG",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      major: "Biology",
      classYear: "Class of 2023",
      expertise: ["Molecular Biology", "Genetics", "Biochemistry"],
      description: {
        academicInterests: ["Molecular Biology", "Genetics", "Bioinformatics"],
        careerGoals: ["Medical Research", "Pharmaceutical Development", "Genetic Counseling"],
        extracurriculars: ["Biology Research Lab", "Pre-Med Society", "Science Outreach Program"],
        demographics: ["Female", "International Student", "Speaks English, Spanish & Portuguese"],
      },
      courseHistory: [
        {
          year: "2022-2023",
          term: "Final Year",
          courses: [
            {
              name: "BIO 401: Advanced Molecular Biology",
              grade: "A",
              professor: "Prof. Thompson",
              term: "Spring 2023",
              description: "Advanced study of molecular processes.",
            },
            {
              name: "BIO 450: Genetics Research",
              grade: "A",
              professor: "Prof. Sharma",
              term: "Spring 2023",
              description: "Research methods in genetics.",
            },
          ],
        },
      ],
    },
  ];

  function renderProfile(profile) {
    return (
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <img
            src={profile.photo}
            alt={profile.name}
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{profile.name}</h2>
          <p className="text-muted-foreground">{profile.major}</p>
          <p className="text-muted-foreground">{profile.classYear}</p>
        </div>
        <div className="mt-6 space-y-4 text-sm">
          <Section title="🎓 Academic Interests" items={profile.description.academicInterests} />
          <Section title="🎯 Career Goals" items={profile.description.careerGoals} />
          <Section title="🏫 Extracurriculars" items={profile.description.extracurriculars} />
          <Section title="🌎 Demographics" items={profile.description.demographics} />
        </div>
      </div>
    );
  }

  function renderCourseHistory(history) {
    return (
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Course History</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {history.map((entry, idx) => (
            <Card key={idx}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Academic Year {entry.year}</CardTitle>
                <CardDescription>{entry.term}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {entry.courses.map((course, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{course.name}</span>
                      <Badge>{course.grade}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{course.professor} • {course.term}</p>
                    <p className="text-xs text-muted-foreground">{course.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (viewMode === "browse-students") {
    if (selectedStudent !== null) {
      const student = otherStudents.find((s) => s.id === selectedStudent);

      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Button variant="ghost" className="flex items-center gap-2" onClick={() => setSelectedStudent(null)}>
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back to Students
            </Button>
            <Button variant="outline" onClick={() => setViewMode("my-profile")}>
              View My Profile
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {student && renderProfile(student)}
            {student && renderCourseHistory(student.courseHistory)}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Button className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Connect
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Request Tutoring
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Browse Student Profiles</h2>
          <Button variant="outline" onClick={() => setViewMode("my-profile")}>
            View My Profile
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search students..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Major" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Majors</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ee">Electrical Engineering</SelectItem>
                <SelectItem value="bio">Biology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {otherStudents.map((student) => (
            <Card
              key={student.id}
              className="cursor-pointer hover:shadow-md"
              onClick={() => setSelectedStudent(student.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={student.photo} alt={student.name} />
                    <AvatarFallback>{student.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <CardDescription>{student.major}, {student.classYear}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Expertise Areas:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {student.expertise.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full flex justify-center gap-1">
                  View Academic History
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">My Academic Profile</h2>
        <Button onClick={() => setViewMode("browse-students")} className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Browse Other Students
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {renderProfile(userProfile)}
        {renderCourseHistory(myCourseHistory)}
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <ul className="list-disc pl-5">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

