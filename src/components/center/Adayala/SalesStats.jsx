import { BarChartBig } from "lucide-react";
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

// Data for sales trends by campaign
const salesTrendData = [
  { campaign: "Medicare", currentSales: 50, previousSales: 45 },
  { campaign: "FE", currentSales: 30, previousSales: 25 },
  { campaign: "Real Estate", currentSales: 20, previousSales: 22 },
  { campaign: "Med Alert", currentSales: 40, previousSales: 35 },
  { campaign: "Home Improvement", currentSales: 25, previousSales: 20 },
];

const SalesStats = () => {
  const totalSales = salesTrendData.reduce((sum, entry) => sum + entry.currentSales, 0);
  const totalRevenue = 45000; // Example data, could be calculated from sales data if unit prices were available
  const topCampaign = "Medicare"; // Example data, could be derived from salesTrendData
  const averageSalesPerCampaign = (totalSales / salesTrendData.length).toFixed(1);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-600 p-6 shadow-lg space-y-6">
      {/* Header section with title and icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Sales Overview (This Month)
        </h2>
        <BarChartBig className="w-6 h-6 text-pink-500" />
      </div>

      {/* Overall Sales Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-slate-600 dark:text-slate-300">
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Total Sales Units:</p>
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {totalSales}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Total Revenue:</p>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">
            ${totalRevenue.toLocaleString()}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg shadow-sm">
          <p className="text-sm">Avg Sales/Campaign:</p>
          <p className="text-lg font-bold text-black dark:text-white">
            {averageSalesPerCampaign}
          </p>
        </div>
      </div>

      {/* Sales Trend by Campaign Chart */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Monthly Sales Trend by Campaign
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={salesTrendData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="campaign" stroke="#64748b" className="text-xs" />
              <YAxis stroke="#64748b" className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.9)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#e2e8f0",
                  padding: "10px",
                }}
                labelStyle={{ color: "#ec4899" }}
                formatter={(value, name) => {
                  if (name === 'currentSales') return [`${value} Units`, 'Current Month'];
                  if (name === 'previousSales') return [`${value} Units`, 'Previous Month'];
                  return value;
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '10px', fontSize: '12px', color: 'rgb(100 116 139)' }}
              />
              <Bar
                dataKey="currentSales"
                fill="#ec4899" // Pink for current sales
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
              <Bar
                dataKey="previousSales"
                fill="#f472b6" // Lighter pink for previous sales
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Sales Insights */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Recent Sales Insights
        </h3>
        <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <span className="font-bold text-indigo-600">Top Performing Campaign:</span>
            <span>{topCampaign} (50 units this month)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-green-600">Growth Campaigns:</span>
            <span>Medicare, FE, Med Alert show positive growth.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-blue-500">Revenue per Sale:</span>
            <span>~${(totalRevenue / totalSales).toFixed(2)} (Avg)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalesStats;