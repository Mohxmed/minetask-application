import CustomCircularProgress from "@components/ui/charts/CircularProgress";

function TasksStatistics({ precentValue, tasksNumber, doneTasks }) {
  return (
    <div className="w-1/3 max-md:w-full h-[230px] text-white bg-gradient-to-b from-blue-950 to-slate-900 rounded-lg p-4 flex flex-col justify-between gap-4">
      <span className="h-1/5 font-bold text-sm text-white text-center">
        Completed Tasks
      </span>
      <div className=" text-center flex items-end justify-center">
        <span className="text-white text-4xl font-medium">{doneTasks}</span>
        <span className="text-gray-400 text-sm">/</span>

        <span className="text-4xl font-medium">{tasksNumber}</span>
        <span className="text-gray-400 text-sm">Task</span>
      </div>
      <div className="flex items-center justify-center">
        <CustomCircularProgress value={precentValue} />
      </div>
    </div>
  );
}

export default TasksStatistics;
