import { CalendarCheck } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

// Data for overall attendance
const overallAttendanceData = [
  { name: "Present", value: 46, color: "#4ade80" },
  { name: "Leave", value: 3, color: "#facc15" },
  { name: "Absent", value: 3, color: "#ef4444" },
];

// Data for monthly attendance trend (example data)
const monthlyAttendanceTrend = [
  { month: "Jan", present: 200, absent: 15, leave: 10 },
  { month: "Feb", present: 195, absent: 10, leave: 12 },
  { month: "Mar", present: 210, absent: 8, leave: 5 },
  { month: "Apr", present: 180, absent: 20, leave: 18 },
  { month: "May", present: 220, absent: 5, leave: 3 },
];

const AttendanceStats = () => {
  const totalDays = overallAttendanceData.reduce((sum, entry) => sum + entry.value, 0);
  const presentDays = overallAttendanceData[0].value;
  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(1);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-600 p-6 shadow-lg space-y-6">
      {/* Header section with title and icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Attendance Overview
        </h2>
        <CalendarCheck className="w-6 h-6 text-indigo-500" />
      </div>

      {/* Overall Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-slate-600 dark:text-slate-300">
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Overall Attendance:</p>
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {attendancePercentage}%
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Present Days:</p>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">
            {presentDays}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Total Employees:</p>
          <p className="text-lg font-bold text-black dark:text-white">
            {totalDays}
          </p>
        </div>
      </div>

      {/* Monthly Attendance Trend Chart */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Monthly Attendance Trend
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyAttendanceTrend}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" className="text-xs" />
              <YAxis stroke="#64748b" className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.9)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#e2e8f0",
                  padding: "10px",
                }}
                labelStyle={{ color: "#60a5fa" }} // Blue color for tooltip label
                formatter={(value, name) => {
                  if (name === 'present') return [`${value} Present`, ''];
                  if (name === 'absent') return [`${value} Absent`, ''];
                  if (name === 'leave') return [`${value} Leave`, ''];
                  return value;
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '10px', fontSize: '12px', color: 'rgb(100 116 139)' }}
              />
              <Bar
                dataKey="present"
                fill="#4ade80" // Green for present
                stackId="a" // Stack bars to show total
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
              <Bar
                dataKey="leave"
                fill="#facc15" // Yellow for leave
                stackId="a"
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
              <Bar
                dataKey="absent"
                fill="#ef4444" // Red for absent
                stackId="a"
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Stats/Insights (example) */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Recent Attendance Insights
        </h3>
        <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <span className="font-bold text-indigo-600">Highest Attendance:</span>
            <span>May (220 Present Days)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-red-500">Highest Absences:</span>
            <span>April (20 Absent Days)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-blue-500">Average Daily Attendance:</span>
            <span>~90%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AttendanceStats;
