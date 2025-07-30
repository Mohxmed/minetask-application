import { useState } from "react";
import SnippetViewer from "./SnippetViewer";
import ProjectCard from "@components/ui/cards/ProjectCard";

function ProjectsOverview() {
  const [viewIndex, setViewIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const projects = [
    {
      title: "E-commerce Store Redesign",
      tag: "UI/UX Design",
      progress: 80,
      deadline: "25/7/2025",
      daysleft: "9 Days Left",
      imgUrl: "../../../src/assets/ecommerce.jpeg",
    },
    {
      title: "Mobile App for Fitness Tracking",
      tag: "App Development",
      progress: 55,
      deadline: "30/7/2025",
      daysleft: "14 Days Left",
      imgUrl: "../../../src/assets/fitness.jpeg",
    },
    {
      title: "Dashboard for Admin Panel",
      tag: "Web Development",
      progress: 70,
      deadline: "22/7/2025",
      daysleft: "6 Days Left",
      imgUrl: "../../../src/assets/project.jpg",
    },
    {
      title: "Brand Identity for Startup",
      tag: "Graphic Design",
      progress: 35,
      deadline: "28/7/2025",
      daysleft: "12 Days Left",
      imgUrl: "../../../src/assets/ecommerce.jpeg",
    },
    {
      title: "Online Booking Platform",
      tag: "Full Stack Development",
      progress: 60,
      deadline: "24/7/2025",
      daysleft: "8 Days Left",
      imgUrl: "../../../src/assets/fitness.jpeg",
    },
    {
      title: "Landing Page for SaaS",
      tag: "Frontend Development",
      progress: 90,
      deadline: "18/7/2025",
      daysleft: "2 Days Left",
      imgUrl: "../../../src/assets/project.jpg",
    },
    {
      title: "Portfolio Website",
      tag: "UI/UX Design",
      progress: 25,
      deadline: "5/8/2025",
      daysleft: "20 Days Left",
      imgUrl: "../../../src/assets/ecommerce.jpeg",
    },
    {
      title: "Real Estate Web App",
      tag: "Backend Development",
      progress: 40,
      deadline: "1/8/2025",
      daysleft: "16 Days Left",
      imgUrl: "../../../src/assets/fitness.jpeg",
    },
    {
      title: "Restaurant Ordering System",
      tag: "Mobile Development",
      progress: 65,
      deadline: "20/7/2025",
      daysleft: "4 Days Left",
      imgUrl: "../../../src/assets/project.jpg",
    },
    {
      title: "Event Management Website",
      tag: "UI/UX + Frontend",
      progress: 50,
      deadline: "27/7/2025",
      daysleft: "11 Days Left",
      imgUrl: "../../../src/assets/ecommerce.jpeg",
    },
  ];

  return (
    <SnippetViewer
      title={"Project Overview"}
      setter={(cb) => {
        const newIndex = cb(viewIndex);
        setDirection(newIndex > viewIndex ? 1 : -1);
        setViewIndex(newIndex);
      }}
      index={viewIndex}
      data={projects}
      direction={direction}
    >
      {projects[viewIndex] && (
        <ProjectCard
          imageUrl={projects[viewIndex].imgUrl}
          title={projects[viewIndex].title}
          tag={projects[viewIndex].tag}
          progress={projects[viewIndex].progress}
          deadline={projects[viewIndex].deadline}
          daysleft={projects[viewIndex].daysleft}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil tempora id "
          }
          status={"in-progress"}
        ></ProjectCard>
      )}
      {projects[viewIndex + 1] && (
        <ProjectCard
          imageUrl={projects[viewIndex + 1].imgUrl}
          title={projects[viewIndex + 1].title}
          tag={projects[viewIndex + 1].tag}
          progress={projects[viewIndex + 1].progress}
          deadline={projects[viewIndex + 1].deadline}
          daysleft={projects[viewIndex + 1].daysleft}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil tempora id "
          }
          status={"wait-list"}
        ></ProjectCard>
      )}
    </SnippetViewer>
  );
}

export default ProjectsOverview;
