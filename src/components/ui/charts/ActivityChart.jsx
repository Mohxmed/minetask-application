import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "S", tasks: 1 },
  { day: "M", tasks: 2 },
  { day: "T", tasks: 1.5 },
  { day: "W", tasks: 2.8 },
  { day: "T", tasks: 2 },
  { day: "F", tasks: 2.2 },
  { day: "S", tasks: 1.9 },
];

export default function ActivityChart() {
  return (
    <>
      <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mb-3">
        <span className="font-bold">Activity</span>
        <span className="text-xs text-gray-500 flex items-center gap-1 cursor-pointer">
          This Week ▾
        </span>
      </div>
      <div className="bg-gray-50 p-4 rounded-xl shadow-sm w-full">
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={data}>
            <CartesianGrid
              vertical={false}
              stroke="#e5e7eb"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide domain={[1, 3]} />
            <Tooltip
              content={({ active, payload }) =>
                active && payload ? (
                  <div className="bg-black text-white text-xs px-2 py-1 rounded shadow">
                    {payload[0].value} Task
                  </div>
                ) : null
              }
            />
            <Area
              type="monotone"
              dataKey="tasks"
              stroke="#000000"
              fill="#546fff00" // ← اللون الموحد للتعبئة
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
