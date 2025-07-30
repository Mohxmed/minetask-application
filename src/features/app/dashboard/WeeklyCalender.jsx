import { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";

// Icons
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Tha", "Fri", "Sat"];

export default function WeeklyCalendar() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(today, { weekStartsOn: 0 })
  );

  const weekDays = [...Array(7)].map((_, i) => {
    const date = addDays(currentWeekStart, i);
    return {
      dayLabel: dayNames[i],
      dateLabel: format(date, "d"),
      fullDate: date,
      isToday: format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd"),
    };
  });

  return (
    <div className="w-full p-4 text-center bg-white card-shadow rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-2 text-gray-400">
        <button
          onClick={() => setCurrentWeekStart((prev) => addDays(prev, -7))}
        >
          <SlArrowLeft size={20} />
        </button>
        <span className="font-semibold text-slate-700">
          {format(currentWeekStart, "MMMM yyyy")}
        </span>
        <button onClick={() => setCurrentWeekStart((prev) => addDays(prev, 7))}>
          <SlArrowRight size={20} />
        </button>
      </div>

      {/* Days */}
      <div className="flex justify-center w-full gap-3">
        {weekDays.map(({ dayLabel, dateLabel, fullDate, isToday }) => {
          const isSelected =
            format(selectedDate, "yyyy-MM-dd") ===
            format(fullDate, "yyyy-MM-dd");

          return (
            <div
              key={fullDate}
              onClick={() => setSelectedDate(fullDate)}
              className={`flex flex-col items-center justify-center w-12 h-16 rounded-lg cursor-pointer transition ${
                isSelected ? "bg-slate-900 text-white" : "text-gray-600"
              }`}
            >
              <div className="text-sm">{dayLabel}</div>
              <div
                className={`text-sm mt-1 w-6 h-6 flex items-center justify-center rounded-full ${
                  isSelected ? "bg-primary text-white" : "bg-gray-100"
                }`}
              >
                {dateLabel}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
