import EmployeeStats from "@/components/center/Adayala/EmployeeStats";
import AttendanceStats from "@/components/center/Adayala/AttendanceStats";
import SalaryStats from "@/components/center/Adayala/SalaryStats";
import SalesStats from "@/components/center/Adayala/SalesStats";
import CampaignStats from "@/components/center/Adayala/CampaignStats";

const Adayala = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Saddar Branch Overview</h1>
        <p className="text-muted-foreground text-sm">
          Performance, stats and activity for this branch
        </p>
      </div>

      {/* Added 'items-start' to prevent grid items from stretching vertically */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-start">
        <EmployeeStats />
        <AttendanceStats />
        <SalaryStats />
        <SalesStats />
        <CampaignStats />
      </div>
    </div>
  );
};

export default Adayala;