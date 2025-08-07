import  { useState, useMemo } from 'react';
import { Search, ChevronDown, Upload, Plus, Trash2, Edit, X } from 'lucide-react';
import { csrs  } from '../../data/CsrData';
const getStatusClasses = (status) => {
  switch (status) {
    case "Online":
      return "bg-green-100 text-green-800";
    case "Offline":
      return "bg-red-100 text-red-800";
    case "On Break":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const CustomerServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    employeeId: "",
    status: "",
    specialty: "",
    joinedDate: "",
    ticketsResolved: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCSR = () => {
    console.log("New CSR:", formData);
    setIsModalOpen(false);
    setFormData({
      fullName: "",
      email: "",
      employeeId: "",
      status: "",
      specialty: "",
      joinedDate: "",
      ticketsResolved: "",
    });
  };

  const filteredCSRs = useMemo(() => {
    return csrs.filter(
      (csr) =>
        csr.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        csr.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        csr.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        csr.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCSRs.length / rowsPerPage);
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentCSRs = filteredCSRs.slice(indexOfFirst, indexOfLast);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-6 font-inter">
      <div className="bg-white dark:bg-slate-900 shadow-md rounded-2xl p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Customer Service Management
          </h1>
          <p className="text-gray-600 dark:text-slate-400">
            Manage CSRs, monitor status, and track performance.
          </p>
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search CSRs"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
            {["Specialty", "Status", "Joined Date"].map((label, index) => (
              <div key={index} className="relative">
                <select className="appearance-none bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-xl py-2 pl-3 pr-8 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>{label}</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-slate-600">
              <Upload className="w-4 h-4 mr-2" /> Export
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" /> Add CSR
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-sm">
          <table className="min-w-full bg-white dark:bg-slate-900">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Full Name</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Email</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Employee ID</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Status</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Specialty</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Joined Date</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Tickets Resolved</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {currentCSRs.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-6 text-gray-500 dark:text-gray-400">
                    No CSRs found.
                  </td>
                </tr>
              ) : (
                currentCSRs.map((csr, idx) => (
                  <tr key={csr.employeeId || idx} className="border-b border-gray-100 dark:border-slate-800">
                    <td className="px-4 py-3 text-gray-900 dark:text-white">{csr.fullName}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-300">{csr.email}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-300">{csr.employeeId}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(csr.status)}`}>
                        {csr.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-300">{csr.specialty}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-300">{csr.joinedDate}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-300">{csr.ticketsResolved}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {indexOfFirst + 1}-{Math.min(indexOfLast, filteredCSRs.length)} of {filteredCSRs.length} CSRs
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 text-sm disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* MODAL JSX */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white dark:bg-slate-800 w-full max-w-md p-6 rounded-xl shadow-lg relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Add New CSR</h2>

              <div className="space-y-3">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleFormChange} placeholder="Full Name" className="w-full px-4 py-2 border rounded-md dark:bg-slate-700 dark:text-white text-gray-900" />
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email Address" className="w-full px-4 py-2 border rounded-md dark:bg-slate-700 dark:text-white text-gray-900" />
                <input type="text" name="employeeId" value={formData.employeeId} onChange={handleFormChange} placeholder="Employee ID" className="w-full px-4 py-2 border rounded-md dark:bg-slate-700 dark:text-white text-gray-900" />
                <select name="status" value={formData.status} onChange={handleFormChange} className="w-full px-4 py-2 border rounded-md dark:bg-slate-700 dark:text-white text-gray-900">
                  <option value="">Select Status</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="On Break">On Break</option>
                </select>
                <input type="text" name="specialty" value={formData.specialty} onChange={handleFormChange} placeholder="Specialty" className="w-full px-4 py-2 border rounded-md dark:bg-slate-700 dark:text-white text-gray-900" />
                <input type="date" name="joinedDate" value={formData.joinedDate} onChange={handleFormChange} className="w-full px-4 py-2 border rounded-md dark:bg-slate-700 dark:text-white text-gray-900" />
                <input type="number" name="ticketsResolved" value={formData.ticketsResolved} onChange={handleFormChange} placeholder="Tickets Resolved" className="w-full px-4 py-2 border rounded-md dark:bg-slate-700 dark:text-white text-gray-900" />
              </div>

              <div className="mt-5 flex justify-end">
                <button onClick={handleAddCSR} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerServices;
