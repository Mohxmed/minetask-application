import TopUserBar from "@components/layout/user-bar/TopUserBar";
import TasksStatistics from "./CompletedTasksWidget";
import ActivityChart from "@components/ui/charts/ActivityChart";
import CompleteTask from "./CompleteTask";
import ProjectsOverview from "./ProjectsOverview";
import { Link } from "react-router";
import { useAuthContext } from "@/features/auth/context/AuthProvider";

function DashboardMainSection() {
  const { userData } = useAuthContext();
  return (
    <main className="flex flex-col gap-4">
      <TopUserBar>
        <div className="sm:hidden flex items-center gap-2">
          <Link to={"/"} className="flex items-center">
            <img
              className="size-10"
              src="../../src/assets/identity/minetask.png"
              alt="Minetask logo"
            />
            <p className={`text-2xl font-medium text-slate-950 `}>
              Mine
              <span className="font-bold">task</span>
            </p>
          </Link>
        </div>
        <div className="flex flex-col max-sm:hidden">
          <span className="font-bold text-2xl max-md:text-lg">
            Hi, {userData?.firstName} 👋
          </span>
          <span className="font-light max-md:text-xs">
            Let's finish your todays tasks!
          </span>
        </div>
      </TopUserBar>

      <div className="flex gap-4 max-md:flex-col">
        <TasksStatistics precentValue={75} tasksNumber={12} doneTasks={7} />
        <div className="w-2/3 max-md:w-full p-4 bg-gradient-to-r from-gray-200 to-slate-200 rounded-lg">
          <ActivityChart />
        </div>
      </div>

      <CompleteTask />
      <ProjectsOverview />
    </main>
  );
}

export default DashboardMainSection;
