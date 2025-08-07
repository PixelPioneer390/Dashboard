import { useState } from 'react';
import { Users, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

// Color constants
const colors = {
  primary: '#6366F1',    // Indigo-500 (slightly lighter)
  secondary: '#10B981',  // Emerald-500
  accent: '#F59E0B',     // Amber-500
  info: '#3B82F6',       // Blue-500
  success: '#10B981',    // Emerald-500
  warning: '#F59E0B',    // Amber-500
  danger: '#EF4444',     // Red-500
  lightBg: '#F9FAFB',    // Gray-50
  darkBg: '#111827',     // Gray-900 (darker)
  textLight: '#6B7280',  // Gray-500
  textDark: '#111827',   // Gray-900
};

// Dummy data with more points for smoother curve
const leadsData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Leads',
    data: [120, 190, 150, 220, 180, 250, 200],
    borderColor: colors.primary,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderWidth: 2,
    fill: true,
    tension: 0.4, // Smoother curve
    pointBackgroundColor: colors.primary,
    pointRadius: 4,
    pointHoverRadius: 6,
  }]
};

const sourceData = {
  labels: ['Facebook Ads', 'Google Ads', 'Direct Calls'],
  datasets: [{
    data: [45, 35, 20],
    backgroundColor: [colors.primary, colors.secondary, colors.accent],
    borderWidth: 0,
  }]
};

const recentLeads = [
  { id: 1, name: 'John Doe', phone: '(555) 234-6372', date: '2025-08-06', status: 'New' },
  { id: 2, name: 'Jane Smith', phone: '(555) 234-5678', date: '2025-08-06', status: 'Verified' },
  { id: 3, name: 'Bob Johnson', phone: '(555) 345-6789', date: '2025-08-05', status: 'Follow-up' },
  { id: 4, name: 'Alice Brown', phone: '(555) 456-7890', date: '2025-08-05', status: 'New' },
  { id: 5, name: 'Mike Wilson', phone: '(555) 567-8901', date: '2025-08-04', status: 'Verified' },
];

export default function Medicare() {
  const [dateFilter, setDateFilter] = useState('This Week');

  return (
    <div className={`p-6 bg-gray-50 dark:bg-gray-900 min-h-screen`}>
      {/* Header Section */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Medicare Campaign Dashboard</h1>
        <div className="mt-4 sm:mt-0">
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className={`p-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className={`p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-30 mr-3`}>
            <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Total Leads</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">2,430</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className={`p-3 rounded-full bg-green-100 dark:bg-green-900 dark:bg-opacity-30 mr-3`}>
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Verified</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">1,845</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className={`p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-30 mr-3`}>
            <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Follow-ups</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">220</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className={`p-3 rounded-full bg-purple-100 dark:bg-purple-900 dark:bg-opacity-30 mr-3`}>
            <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Conv. Rate</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">35.2%</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Daily Leads Trend</h2>
          <div className="h-64">
            <Line 
              data={leadsData} 
              options={{ 
                maintainAspectRatio: false, 
                responsive: true,
                plugins: {
                  legend: {
                    labels: {
                      color: '#6B7280', // Gray-500 for light, will be overridden for dark
                      font: {
                        weight: '500',
                      }
                    }
                  },
                  tooltip: {
                    backgroundColor: '#1F2937', // Gray-800
                    titleColor: '#F9FAFB',     // Gray-50
                    bodyColor: '#E5E7EB',      // Gray-200
                    borderColor: '#374151',    // Gray-700
                    borderWidth: 1,
                  }
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      color: '#E5E7EB' // Gray-200
                    },
                    ticks: {
                      color: '#6B7280' // Gray-500
                    }
                  },
                  y: {
                    grid: {
                      color: '#E5E7EB' // Gray-200
                    },
                    ticks: {
                      color: '#6B7280' // Gray-500
                    }
                  }
                }
              }} 
            />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Lead Source Distribution</h2>
          <div className="h-64">
            <Bar 
              data={sourceData} 
              options={{ 
                maintainAspectRatio: false, 
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: {
                    backgroundColor: '#1F2937', // Gray-800
                    titleColor: '#F9FAFB',     // Gray-50
                    bodyColor: '#E5E7EB',      // Gray-200
                    borderColor: '#374151',    // Gray-700
                    borderWidth: 1,
                  }
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      color: '#E5E7EB' // Gray-200
                    },
                    ticks: {
                      color: '#6B7280' // Gray-500
                    }
                  },
                  y: {
                    grid: {
                      color: '#E5E7EB' // Gray-200
                    },
                    ticks: {
                      color: '#6B7280' // Gray-500
                    }
                  }
                }
              }} 
            />
          </div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow overflow-hidden">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Leads</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Name</th>
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Phone</th>
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Date</th>
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 text-gray-900 dark:text-white font-medium">{lead.name}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.phone}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.date}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' :
                      lead.status === 'Verified' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}