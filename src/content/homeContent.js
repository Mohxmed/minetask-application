import {
  CiGrid42,
  CiBatteryFull,
  CiCalendarDate,
  CiStar,
} from "react-icons/ci";

const homeContent = {
  hero: {
    title: "Plan your day clearly, and keep a sight to ",
    keyword: "Progress",
    description:
      "Organize your daily tasks with clarity and purpose. Whether it's asmall step or a big goal, tracking your progress keeps you focused, motivated, and always moving forward. Take control of your time — one task at a time.",
    buttons: {
      account: "Create an account",
      geust: "Continue as a gesut",
    },
  },
  features: {
    title: "App Features",
    feature: [
      {
        title: "Divide & Conquer",
        description:
          "Break big projects into small, manageable tasks. MiniTasks helps you simplify complex goals by splitting them into bite-sized actions.",
        icon: CiGrid42,
      },
      {
        title: "Stay on Track",
        description:
          "Keep your progress visible and your motivation high. With a clear view of what’s done and what’s next, MiniTasks keeps you focused and moving forward.",
        icon: CiBatteryFull,
      },
      {
        title: "Flexible Workflow",
        description:
          "Adapt tasks to your rhythm and style. Whether you plan daily or weekly, MiniTasks adjusts to how you work best — add, edit, reschedule anytime.",
        icon: CiCalendarDate,
      },
      {
        title: "Smart Progress Overview",
        description:
          "Visualize your journey toward completion. Get instant insight into your progress with dynamic indicators that show how far you’ve come — and what’s left.",
        icon: CiStar,
      },
    ],
  },
  start: {
    title: "Start Now!",
    second: "No Plans, Totally Free.",
    plans: [
      {
        title: "Create an Account (Free)",
        features: [
          "Unlimited projects and MiniTasks",
          "Cloud sync — access from any device",
          "Data backed up and secure",
          "Perfect for long-term productivity",
        ],
        note: "Your tasks are always safe and synced.",
        buttonText: "Create A New Account",
      },
      {
        title: "Use Without Signing Up",
        features: [
          "Start instantly — no account needed",
          "Create one project and manage tasks",
          "Data saved locally in your browser",
          "Best for testing or quick tasks",
        ],
        note: "Data won’t sync across devices.",
        buttonText: "Continue As A Guest",
      },
    ],
  },
};

export default homeContent;
