import DashboardLayout from "./DashboardLayout";
import DashboardMainSection from "./DashboardMainSection";
import DashboardTodaySection from "./DashboardTodaySection";

export default function DashboardPage() {
  return (
    <DashboardLayout
      main={() => <DashboardMainSection />}
      aside={() => <DashboardTodaySection />}
    />
  );
}
