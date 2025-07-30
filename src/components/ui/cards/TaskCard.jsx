import CustomProgressBar from "../charts/CustomProgressBar";
import { PiTarget } from "react-icons/pi";

export default function TaskCard({
  number,
  title,
  project,
  progress,
  priority,
  status,
  description,
}) {
  return (
    <div className="w-full bg-white card-shadow cursor-pointer rounded-lg p-4 flex flex-col items-center">
      <div className="w-full flex items-center justify-between gap-2">
        <span className="bg-primary flex items-center justify-center min-w-8 h-8  rounded-lg text-white">
          {number}
        </span>
        <div className="w-full">
          <span className="font-medium">{title}</span>
          <br />
          <span className="text-xs flex items-center text-gray-500 gap-0.5">
            <PiTarget size={15} />
            {project}
          </span>
        </div>
      </div>
      <div className="w-full mt-2 flex flex-col items-end ">
        <CustomProgressBar value={progress} />
        <span className="text-primary font-medium">{progress}%</span>
      </div>
      <div className="w-full min-h-15 flex justify-start">
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex justify-start w-full gap-2">
        <span
          className={`text-xs px-2 py-0.5 rounded-md text-white ${
            priority == "high-priority"
              ? "bg-red-500"
              : priority == "meduim-priority"
              ? "bg-orange-500"
              : "bg-yellow-500"
          }`}
        >
          {priority}
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-md text-white ${
            status == "in-progress"
              ? "bg-green-500"
              : status == "todo"
              ? "bg-gray-400"
              : "bg-slate-800"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
