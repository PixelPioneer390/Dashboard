import { Users, CheckCircle, TrendingUp, Phone, Mail } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

// Color scheme for Himp
const colors = {
  primary: '#7C3AED',    // Purple-600
  secondary: '#EC4899',  // Pink-500
  accent: '#F59E0B',     // Amber-500
  info: '#3B82F6',       // Blue-500
  success: '#10B981',    // Emerald-500
  warning: '#F59E0B',    // Amber-500
};

// Different leads data for Himp
const leadsData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Leads',
    data: [85, 120, 95, 150],
    borderColor: colors.primary,
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    borderWidth: 2,
    fill: true,
    tension: 0.4,
    pointBackgroundColor: colors.primary,
    pointRadius: 4,
    pointHoverRadius: 6,
  }]
};

const sourceData = {
  labels: ['Website', 'Social Media', 'Referrals', 'Email'],
  datasets: [{
    data: [40, 30, 20, 10],
    backgroundColor: [colors.primary, colors.secondary, colors.accent, colors.info],
    borderWidth: 0,
  }]
};

const recentLeads = [
  { id: 1, name: 'Raj Sharma', contact: 'raj@example.com', date: '2025-08-06', source: 'Website', status: 'New' },
  { id: 2, name: 'Priya Patel', contact: '(987) 654-3210', date: '2025-08-05', source: 'Social', status: 'Contacted' },
  { id: 3, name: 'Amit Singh', contact: 'amit@example.com', date: '2025-08-05', source: 'Referral', status: 'Qualified' },
  { id: 4, name: 'Neha Gupta', contact: '(987) 123-4567', date: '2025-08-04', source: 'Email', status: 'New' },
  { id: 5, name: 'Vikram Joshi', contact: 'vikram@example.com', date: '2025-08-03', source: 'Website', status: 'Contacted' },
];

const Himp = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HIMP Marketing Dashboard</h1>
        <div className="mt-4 sm:mt-0">
          <select className="p-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Last 4 Weeks</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 dark:bg-opacity-30 mr-3">
            <Users className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Total Leads</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">450</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900 dark:bg-opacity-30 mr-3">
            <Phone className="h-6 w-6 text-pink-600 dark:text-pink-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Contacted</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">320</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900 dark:bg-opacity-30 mr-3">
            <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Qualified</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">210</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 mr-3">
            <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Conversion</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">46.7%</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Weekly Leads Trend</h2>
          <div className="h-64">
            <Line 
              data={leadsData} 
              options={{ 
                maintainAspectRatio: false, 
                responsive: true,
                plugins: {
                  legend: {
                    labels: {
                      color: '#6B7280',
                      font: { weight: '500' }
                    }
                  },
                  tooltip: {
                    backgroundColor: '#1F2937',
                    titleColor: '#F9FAFB',
                    bodyColor: '#E5E7EB',
                    borderColor: '#374151',
                    borderWidth: 1,
                  }
                },
                scales: {
                  x: {
                    grid: { display: false, color: '#E5E7EB' },
                    ticks: { color: '#6B7280' }
                  },
                  y: {
                    grid: { color: '#E5E7EB' },
                    ticks: { color: '#6B7280' }
                  }
                }
              }} 
            />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Lead Sources</h2>
          <div className="h-64">
            <Bar 
              data={sourceData} 
              options={{ 
                maintainAspectRatio: false, 
                responsive: true,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: '#1F2937',
                    titleColor: '#F9FAFB',
                    bodyColor: '#E5E7EB',
                    borderColor: '#374151',
                    borderWidth: 1,
                  }
                },
                scales: {
                  x: {
                    grid: { display: false, color: '#E5E7EB' },
                    ticks: { color: '#6B7280' }
                  },
                  y: {
                    grid: { color: '#E5E7EB' },
                    ticks: { color: '#6B7280' }
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
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Contact</th>
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Date</th>
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Source</th>
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-3 text-gray-900 dark:text-white font-medium">{lead.name}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-300 flex items-center">
                    {lead.contact.includes('@') ? <Mail className="h-4 w-4 mr-1" /> : <Phone className="h-4 w-4 mr-1" />}
                    {lead.contact}
                  </td>
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.date}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.source}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      lead.status === 'Contacted' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' :
                      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
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

export default Himp;