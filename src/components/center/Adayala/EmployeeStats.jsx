import { Users } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Data for overall employee status
const employeeStatusData = [
  { name: "Active", value: 48, color: "#22c55e" }, // Green for active
  { name: "Inactive", value: 4, color: "#ef4444" }, // Red for inactive
];

// Data for employee distribution by department (example data)
const employeeByDepartment = [
  { department: "Sales", employees: 15 },
  { department: "HR", employees: 5 },
  { department: "Tech", employees: 25 },
  { department: "Support", employees: 7 },
  { department: "Marketing", employees: 8 }, // Added another department for more data
];

const EmployeeStats = () => {
  const totalEmployees = employeeStatusData.reduce((sum, entry) => sum + entry.value, 0);
  const activeEmployees = employeeStatusData[0].value;
  const inactiveEmployees = employeeStatusData[1].value;
  const activePercentage = ((activeEmployees / totalEmployees) * 100).toFixed(1);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-600 p-6 shadow-lg space-y-6">
      {/* Header section with title and icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Employee Statistics
        </h2>
        <Users className="w-6 h-6 text-blue-500" />
      </div>

      {/* Overall Employee Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-slate-600 dark:text-slate-300">
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Total Employees:</p>
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {totalEmployees}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Active Employees:</p>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">
            {activeEmployees} ({activePercentage}%)
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Inactive Employees:</p>
          <p className="text-lg font-bold text-red-500">
            {inactiveEmployees}
          </p>
        </div>
      </div>

      {/* Employee Distribution by Department Chart */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Employees by Department
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={employeeByDepartment}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="department" stroke="#64748b" className="text-xs" />
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
                formatter={(value) => [`${value} Employees`, '']}
              />
              <Bar
                dataKey="employees"
                fill="#60a5fa" // Blue for employee count
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Employee Insights */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Recent Employee Insights
        </h3>
        <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <span className="font-bold text-indigo-600">Largest Department:</span>
            <span>Tech (25 Employees)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-red-500">Recent Departures:</span>
            <span>4 Inactive Employees in last quarter</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-blue-500">Departmental Growth:</span>
            <span>Marketing added 3 new hires this month</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeStats;
