import CustomProgressBar from "@components/ui/charts/CustomProgressBar";
// Icons
import { TfiTimer } from "react-icons/tfi";
import { FiMoreHorizontal } from "react-icons/fi";

function TodaysProject() {
  return (
    <div className="card-shadow w-full p-4 pb-6 sticky top-4 h-max rounded-lg bg-white">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Day's Project</h2>
        <button>
          <FiMoreHorizontal size={20} />
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="border-b border-gray-200 pb-5 space-y-2">
          <img
            className="w-full h-32 object-cover rounded-lg"
            src="../../../src/assets/project.jpg"
            alt="Project Picture"
          />
          <div>
            <h2 className="font-semibold">Freelance Real Estate Website</h2>
            <span className="text-xs block">UI/UX Design</span>
          </div>
          <div className="flex flex-col items-end ">
            <CustomProgressBar value={40} />
            <span className="text-primary font-medium">40%</span>
          </div>
          <span className="flex items-center gap-2 text-gray-500 -mt-4">
            <TfiTimer size={18} />
            <span>20/6/2025</span>
            <span className="text-xs">(3 Days Left)</span>
          </span>
        </div>
        <div>
          <div className="flex justify-between items-center ">
            <h2 className="font-semibold">Task Details</h2>
            <span className="text-xs">UI/UX Designer</span>
          </div>
          <TaskListItem number={1} text={"Creating The Wireframes"} />
          <TaskListItem number={2} text={"Implement Frontend Design"} />
          <TaskListItem number={3} text={"Handle Backend with firebase"} />
          <TaskListItem number={4} text={"Test Full website"} />
          <div className="w-full h-10 flex items-center justify-center mt-5">
            <button className="bg-primary hover:bg-[#3a54dc] transition-colors duration-150 px-4 py-2 w-full rounded-lg text-white font-medium text-sm my-6">
              View Full Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysProject;

function TaskListItem({ number, text }) {
  return (
    <div className="flex items-center gap-2 mt-3 cursor-pointer group">
      <div className="bg-gray-100 group-hover:bg-gray-300 transition-colors duration-150 cursor-pointer rounded-lg flex items-center justify-center size-8">
        {number}
      </div>
      <div className="text-sm">{text}</div>
    </div>
  );
}
