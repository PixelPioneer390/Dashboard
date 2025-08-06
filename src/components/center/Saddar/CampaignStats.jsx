import { Megaphone } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Data for the chart and detailed list
const rawCampaignData = [
  { name: "Medicare", total: 20, details: "(10 Fronters, 5 Verifiers)" },
  { name: "FE", total: 8, details: "" },
  { name: "Real Estate", total: 6, details: "" },
  { name: "Med Alert", total: 10, details: "(6 Fronters, 4 Verifiers)" },
  { name: "Home Improvement", total: 8, details: "" },
];

const CampaignStats = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-600 p-6 shadow-lg space-y-6">
      {/* Header section with title and icon */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Campaign Statistics
        </h2>
        <Megaphone className="w-6 h-6 text-violet-500" />
      </div>

      {/* Chart section */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={rawCampaignData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /> {/* Lighter grid lines for a cleaner look */}
            <XAxis dataKey="name" stroke="#64748b" className="text-xs" /> {/* X-axis labels for campaign names */}
            <YAxis stroke="#64748b" className="text-xs" /> {/* Y-axis labels for agent count */}
            <Tooltip
              cursor={{ fill: "transparent" }} // Makes the tooltip background transparent
              contentStyle={{
                backgroundColor: "rgba(30, 41, 59, 0.9)", // Dark background for tooltip
                border: "none",
                borderRadius: "8px",
                color: "#e2e8f0", // Light text for tooltip content
              }}
              
            />
            <Bar
              dataKey="total"
              fill="#8b5cf6" // A vibrant violet color for the bars
              radius={[4, 4, 0, 0]} // Rounded top corners for the bars
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Agent Breakdown list */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Agent Breakdown
        </h3>
        <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-300">
          {rawCampaignData.map((campaign, index) => (
            <li key={index} className="flex justify-between items-center bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
              <span className="font-medium text-gray-900 dark:text-white">{campaign.name}:</span>
              <span className="text-right">
                <strong className="text-indigo-600 dark:text-indigo-400">{campaign.total} Agents</strong>
                {campaign.details && <span className="block text-xs text-slate-500 dark:text-slate-400">{campaign.details}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignStats;
