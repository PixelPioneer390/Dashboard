import { useState, useMemo } from 'react';
import { Search, Trash2, Edit, Plus, X } from 'lucide-react';
import { ManagerData as initialData } from '../../data/managerdata';

const Managers = () => {
  const [users, setUsers] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    username: '',
    status: 'Active',
    role: '',
    joinedDate: '',
    lastActive: '',
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(prev => prev.filter(user => user.id !== id));
    }
  };

  const handleAddUser = () => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers(prev => [...prev, { ...newUser, id }]);
    setNewUser({
      fullName: '',
      email: '',
      username: '',
      status: 'Active',
      role: '',
      joinedDate: '',
      lastActive: '',
    });
    setShowModal(false);
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

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
      <h1 className='text-5xl text-center text-gray-900 dark:text-white font-semibold'>Manager Data</h1>

      <div className="bg-slate-50 dark:bg-slate-900 shadow-lg rounded-xl p-4 sm:p-6">
        <div className='flex justify-between items-center mb-4'>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search managers..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-white"
            />
            <Search className="ml-2 w-5 h-5 text-gray-400" />
          </div>

          <button
            onClick={() => setShowModal(true)}
            className='bg-blue-700 text-white p-2 rounded-md flex items-center gap-2'
          >
            <Plus className='w-4 h-4' /> Add Data
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-white dark:text-whiteuppercase tracking-wider">Select</th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase text-gray-900 dark:text-white tracking-wider">Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">Email</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">Username</th>
                <th className="px-4 py-2 text-left text-xs text-gray-900 dark:text-white">Status</th>
                <th className="px-4 py-2 text-left text-xs text-gray-900 dark:text-white">Role</th>
                <th className="px-4 py-2 text-left text-xs text-gray-900 dark:text-white">Joined</th>
                <th className="px-4 py-2 text-left text-xs text-gray-900 dark:text-white">Last Active</th>
                <th className="px-4 py-2 text-left text-xs text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-gray-700">
              {currentUsers.length > 0 ? currentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-3"><input type="checkbox" /></td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{user.fullName}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{user.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{user.username}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{user.role}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{user.joinedDate}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{user.lastActive}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <button onClick={() => alert(`Edit ${user.id}`)} className="text-blue-500">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="9" className="text-center py-4 text-gray-500 dark:text-gray-400">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Page {currentPage} of {Math.ceil(filteredUsers.length / rowsPerPage)}
          </span>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredUsers.length / rowsPerPage)))}
            disabled={currentPage === Math.ceil(filteredUsers.length / rowsPerPage)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Add Data Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
              <X />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Add New Manager</h2>
            <div className="grid grid-cols-1 gap-4">
              {['fullName', 'email', 'username', 'role', 'joinedDate', 'lastActive'].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  value={newUser[field]}
                  onChange={(e) => setNewUser({ ...newUser, [field]: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-md dark:bg-slate-700 dark:text-white"
                />
              ))}
              <select
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md dark:bg-slate-700 dark:text-white"
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
                <option>Banned</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
              <button onClick={handleAddUser} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Managers;
