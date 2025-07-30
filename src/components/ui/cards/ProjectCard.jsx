import CustomProgressBar from "../charts/CustomProgressBar";
// Icons
import { TfiTimer } from "react-icons/tfi";

export default function ProjectCard({
  title,
  tag,
  progress,
  deadline,
  daysleft,
  description,
  status,
  imageUrl,
}) {
  return (
    <div className="bg-white p-4 rounded-lg card-shadow flex flex-col gap-2 w-full cursor-pointer">
      <img
        className="w-full h-32 object-cover rounded-lg"
        src={imageUrl}
        alt="Project Picture"
      />
      <div>
        <h2 className="font-semibold">{title}</h2>
        <span className="text-xs block">{tag}</span>
      </div>
      <div className="flex flex-col items-end ">
        <CustomProgressBar value={progress} />
        <span className="text-primary font-medium">{progress}%</span>
      </div>
      <div className="flex justify-start w-full gap-2 -mt-6">
        <span
          className={`text-xs px-2 py-0.5 rounded-md text-white ${
            status == "in-progress"
              ? "bg-green-500"
              : status == "wait-list"
              ? "bg-gray-400"
              : "bg-slate-800"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="w-full  flex justify-start mb-6 mt-4">
        <p className="text-sm">{description}</p>
      </div>
      <span className="flex items-center gap-1 text-gray-500 -mt-4">
        <TfiTimer size={16} />
        <span className="text-sm">{deadline}</span>
        <span className="text-xs text-gray-400">({daysleft})</span>
      </span>
    </div>
  );
}
