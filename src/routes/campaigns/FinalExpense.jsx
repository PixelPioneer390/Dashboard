import { Users, Phone, Calendar, ClipboardList } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

// Color scheme for Final Expense
const colors = {
  primary: '#059669',    // Emerald-600
  secondary: '#2563EB',  // Blue-600
  accent: '#D97706',     // Amber-600
  info: '#7C3AED',       // Purple-600
  success: '#059669',    // Emerald-600
  warning: '#D97706',    // Amber-600
};

// Final Expense leads data
const leadsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Leads',
    data: [65, 78, 82, 90, 105, 120],
    borderColor: colors.primary,
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
    borderWidth: 2,
    fill: true,
    tension: 0.3,
    pointBackgroundColor: colors.primary,
    pointRadius: 4,
    pointHoverRadius: 6,
  }]
};

const sourceData = {
  labels: ['Direct Mail', 'Online Ads', 'Referrals', 'TV Ads'],
  datasets: [{
    data: [45, 30, 15, 10],
    backgroundColor: [colors.primary, colors.secondary, colors.accent, colors.info],
    borderWidth: 0,
  }]
};

const recentLeads = [
  { id: 1, name: 'Robert Johnson', age: 68, contact: '(555) 123-4567', date: '2025-08-06', status: 'New', source: 'Direct Mail' },
  { id: 2, name: 'Margaret Williams', age: 72, contact: '(555) 234-5678', date: '2025-08-05', status: 'Contacted', source: 'Online Ads' },
  { id: 3, name: 'James Smith', age: 65, contact: '(555) 345-6789', date: '2025-08-05', status: 'Appointment Set', source: 'Referrals' },
  { id: 4, name: 'Patricia Brown', age: 70, contact: '(555) 456-7890', date: '2025-08-04', status: 'New', source: 'TV Ads' },
  { id: 5, name: 'Michael Davis', age: 67, contact: '(555) 567-8901', date: '2025-08-03', status: 'Contacted', source: 'Direct Mail' },
];

const FinalExpense = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Final Expense Leads Dashboard</h1>
        <div className="mt-4 sm:mt-0">
          <select className="p-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>Last 6 Months</option>
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 dark:bg-opacity-30 mr-3">
            <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Total Leads</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">500</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 mr-3">
            <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Contacted</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">350</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900 dark:bg-opacity-30 mr-3">
            <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Appointments</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">120</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 dark:bg-opacity-30 mr-3">
            <ClipboardList className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Policies Sold</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">45</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Monthly Leads Trend</h2>
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
                <th className="p-3 text-gray-500 dark:text-gray-300 font-medium">Age</th>
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
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.age}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.contact}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.date}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-300">{lead.source}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' :
                      lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
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

export default FinalExpense;