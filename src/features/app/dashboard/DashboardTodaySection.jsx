import TodaysProject from "./TodaysProject";
import WeeklyCalendar from "./WeeklyCalender";

export default function DashboardTodaySection() {
  return (
    <div className="space-y-4 h-full">
      <WeeklyCalendar />
      <TodaysProject />
    </div>
  );
}
