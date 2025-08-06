import { useState, useMemo } from 'react';
import { Search, ChevronDown, Upload, Plus, Trash2, Edit } from 'lucide-react';
import { ManagerData } from '../../data/managerdata';

const Managers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const filteredUsers = useMemo(() => {
    return ManagerData.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      case 'Banned':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Suspended':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-4 sm:p-6 lg:p-8 font-inter">
      <div className=" bg-slate-50 dark:bg-slate-900 shadow-lg rounded-xl p-4 sm:p-6">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold texat-gray-900 dark:text-white mb-2">User Management</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage all users in one place. Control access, assign roles, and monitor activity across your platform.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {['Role', 'Status', 'Date'].map((label) => (
              <div className="relative" key={label}>
                <select className="appearance-none bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>{label}</option>
                  {label === 'Role' && ['Admin', 'User', 'Moderator', 'Guest'].map(r => <option key={r}>{r}</option>)}
                  {label === 'Status' && ['Active', 'Inactive', 'Banned', 'Pending', 'Suspended'].map(s => <option key={s}>{s}</option>)}
                  {label === 'Date' && ['Last 7 days', 'Last 30 days', 'This year'].map(d => <option key={d}>{d}</option>)}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <Upload className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                {['', 'Full Name', 'Email', 'Username', 'Status', 'Role', 'Joined Date', 'Last Active', 'Actions'].map((head, i) => (
                  <th key={head + i} className={`px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${i === 0 ? 'rounded-tl-lg' : ''} ${i === 8 ? 'rounded-tr-lg' : ''}`}>
                    {head || <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-gray-700">
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{user.fullName}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">{user.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">{user.username}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">{user.role}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">{user.joinedDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">{user.lastActive}</td>
                    <td className="px-4 py-3 text-left text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Rows per page <span className="font-medium">{rowsPerPage}</span> of <span className="font-medium">{filteredUsers.length}</span> rows
          </div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 border text-sm font-medium ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Managers;
