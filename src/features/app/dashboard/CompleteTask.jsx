import { useState } from "react";
import SnippetViewer from "./SnippetViewer";
import TaskCard from "@components/ui/cards/TaskCard";

function CompleteTask() {
  const [viewIndex, setViewIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const tasks = [
    {
      num: 1,
      project: "Website Redesign",
      title: "Design Homepage UI",
      progress: 90,
      priority: "high-priority",
      status: "done",
      description:
        "Design a modern, responsive homepage using Figma that aligns with the new brand identity.",
    },
    {
      num: 2,
      project: "E-Commerce Platform",
      title: "Build Product Detail Page",
      progress: 60,
      priority: "medium-priority",
      status: "in-progress",
      description:
        "Develop a reusable product detail page with image zoom, rating, and add-to-cart functionality.",
    },
    {
      num: 3,
      project: "Website Redesign",
      title: "Setup Tailwind CSS Config",
      progress: 100,
      priority: "low",
      status: "done",
      description:
        "Customize Tailwind theme with project colors, spacing, and typography guidelines.",
    },
    {
      num: 4,
      project: "Mobile App",
      title: "Implement Push Notifications",
      progress: 20,
      priority: "high-priority",
      status: "todo",
      description:
        "Integrate Firebase Cloud Messaging to send real-time push notifications to users.",
    },
    {
      num: 5,
      project: "E-Commerce Platform",
      title: "Create Checkout Flow",
      progress: 75,
      priority: "high-priority",
      status: "in-progress",
      description:
        "Build multi-step checkout process with address input, payment, and order summary screens.",
    },
    {
      num: 6,
      project: "Company Dashboard",
      title: "Integrate Stripe Payments",
      progress: 35,
      priority: "medium-priority",
      status: "in-progress",
      description:
        "Add Stripe integration for invoice payments and subscription billing with webhooks.",
    },
    {
      num: 7,
      project: "Website Redesign",
      title: "Improve SEO Performance",
      progress: 45,
      priority: "medium-priority",
      status: "in-progress",
      description:
        "Optimize meta tags, open graph data, image alt texts, and page load speed for SEO.",
    },
    {
      num: 8,
      project: "Task Management Tool",
      title: "Implement Drag & Drop for Tasks",
      progress: 0,
      priority: "medium-priority",
      status: "todo",
      description:
        "Add drag-and-drop task reordering using React DnD or a similar library.",
    },
    {
      num: 9,
      project: "E-Commerce Platform",
      title: "Set Up Product Filtering",
      progress: 50,
      priority: "low",
      status: "in-progress",
      description:
        "Allow users to filter products by category, brand, price range, and availability.",
    },
    {
      num: 10,
      project: "Mobile App",
      title: "Fix Login with Google Issue",
      progress: 100,
      priority: "high-priority",
      status: "done",
      description:
        "Resolve OAuth redirect issue causing Google login to fail intermittently on Android.",
    },
    {
      num: 11,
      project: "Company Dashboard",
      title: "Add Export to CSV Functionality",
      progress: 80,
      priority: "medium-priority",
      status: "in-progress",
      description:
        "Enable users to export tables and reports to downloadable CSV files.",
    },
    {
      num: 12,
      project: "Client Portfolio Website",
      title: "Setup Contact Form with Email",
      progress: 100,
      priority: "low",
      status: "done",
      description:
        "Build contact form that sends emails using EmailJS or a backend endpoint.",
    },
    {
      num: 13,
      project: "Client Portfolio Website",
      title: "Deploy Website to Vercel",
      progress: 100,
      priority: "medium-priority",
      status: "done",
      description:
        "Connect GitHub repo to Vercel and setup automatic deployment pipeline.",
    },
    {
      num: 14,
      project: "Task Management Tool",
      title: "Build Kanban Board View",
      progress: 15,
      priority: "high-priority",
      status: "in-progress",
      description:
        "Create Trello-style board to display tasks by status (To Do, In Progress, Done).",
    },
  ];

  return (
    <SnippetViewer
      data={tasks}
      title={"Complete Tasks"}
      setter={(cb) => {
        const newIndex = cb(viewIndex);
        setDirection(newIndex > viewIndex ? 1 : -1);
        setViewIndex(newIndex);
      }}
      index={viewIndex}
      direction={direction}
    >
      {tasks[viewIndex] && (
        <TaskCard
          number={tasks[viewIndex].num}
          title={tasks[viewIndex].title}
          project={tasks[viewIndex].project}
          progress={tasks[viewIndex].progress}
          priority={tasks[viewIndex].priority}
          status={tasks[viewIndex].status}
          description={tasks[viewIndex].description}
        />
      )}
      {tasks[viewIndex + 1] && (
        <TaskCard
          number={tasks[viewIndex + 1].num}
          title={tasks[viewIndex + 1].title}
          project={tasks[viewIndex + 1].project}
          progress={tasks[viewIndex + 1].progress}
          priority={tasks[viewIndex + 1].priority}
          status={tasks[viewIndex + 1].status}
          description={tasks[viewIndex + 1].description}
        />
      )}
    </SnippetViewer>
  );
}

export default CompleteTask;
