import EmployeeStats from "@/components/center/Karachi/EmployeeStats";
import AttendanceStats from "@/components/center/Karachi/AttendanceStats";
import SalaryStats from "@/components/center/Karachi/SalaryStats";
import SalesStats from "@/components/center/Karachi/SalesStats";
import CampaignStats from "@/components/center/Karachi/CampaignStats";

const Karachi = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Saddar Branch Overview</h1>
        <p className="text-muted-foreground text-sm">
          Performance, stats and activity for this branch
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <EmployeeStats />
        <AttendanceStats />
        <SalaryStats />
        <SalesStats />
        <CampaignStats />
      </div>
    </div>
  );
};

export default Karachi;
