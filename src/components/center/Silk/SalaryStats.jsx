import { DollarSign } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

// Data for salary trends by experience level
const salaryTrendData = [
  { experienceLevel: "Entry (0-2 yrs)", currentSalary: 3200, previousSalary: 2800 },
  { experienceLevel: "Mid (3-5 yrs)", currentSalary: 4500, previousSalary: 4000 },
  { experienceLevel: "Senior (6-10 yrs)", currentSalary: 6000, previousSalary: 5500 },
  { experienceLevel: "Lead (10+ yrs)", currentSalary: 8000, previousSalary: 7000 },
];

const SalaryStats = () => {
  const avgSalary = 3200; // Example data
  const totalPaid = 160000; // Example data
  const pendingEmployees = 2; // Example data

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-600 p-6 shadow-lg space-y-6">
      {/* Header section with title and icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Salary Overview
        </h2>
        <DollarSign className="w-6 h-6 text-emerald-500" />
      </div>

      {/* Overall Salary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-slate-600 dark:text-slate-300">
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Avg Salary:</p>
          <p className="text-lg font-bold text-black dark:text-white">${avgSalary.toLocaleString()}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Total Paid:</p>
          <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">${totalPaid.toLocaleString()}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Pending:</p>
          <p className="text-lg font-bold text-red-500">{pendingEmployees} Employees</p>
        </div>
      </div>

      {/* Salary Trend by Experience Chart */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Salary Trend by Experience
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salaryTrendData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="experienceLevel" stroke="#64748b" className="text-xs" />
              <YAxis stroke="#64748b" className="text-xs" tickFormatter={(value) => `$${value.toLocaleString()}`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.9)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#e2e8f0",
                  padding: "10px",
                }}
                labelStyle={{ color: "#a78bfa" }}
                formatter={(value, name) => {
                  if (name === 'currentSalary') return [`$${value.toLocaleString()}`, 'Current'];
                  if (name === 'previousSalary') return [`$${value.toLocaleString()}`, 'Previous'];
                  return value;
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '10px', fontSize: '12px', color: 'rgb(100 116 139)' }}
              />
              <Line
                type="monotone"
                dataKey="currentSalary"
                stroke="#3b82f6" // Blue for current salary
                activeDot={{ r: 8 }}
                strokeWidth={2}
                animationDuration={1000} // Animation effect
              />
              <Line
                type="monotone"
                dataKey="previousSalary"
                stroke="#a78bfa" // Violet for previous salary
                activeDot={{ r: 8 }}
                strokeWidth={2}
                animationDuration={1000} // Animation effect
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Expertise Impact Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Expertise Impact on Salary
        </h3>
        <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <span className="font-bold text-emerald-600">Specialized Skills:</span>
            <span>Boosts package by 15-25% (e.g., AI/ML, Cybersecurity).</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-emerald-600">Certifications:</span>
            <span>Adds 5-10% (e.g., PMP, AWS Certified).</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-emerald-600">Leadership Roles:</span>
            <span>Increases package by 20-40% (e.g., Team Lead, Manager).</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalaryStats;