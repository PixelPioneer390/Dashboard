import { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ITSupport = () => {
  const [selectedCenter, setSelectedCenter] = useState('Mars BPO Saddar');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCondition, setFilterCondition] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [issueDevice, setIssueDevice] = useState('');
  const [employees, setEmployees] = useState([
    { id: 'E001', name: 'John Doe', center: 'Mars BPO Saddar', lcd: 'Yes', cpu: 'Yes', mouse: 'Yes', keyboard: 'Yes', headphones: 'Yes', internet: 'Yes', condition: 'Good', deductions: 0 },
    { id: 'E002', name: 'Jane Smith', center: 'Mars BPO Saddar', lcd: 'Yes', cpu: 'Yes', mouse: 'Yes', keyboard: 'Yes', headphones: 'Yes', internet: 'No', condition: 'Faulty', deductions: 500 },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    center: 'Mars BPO Saddar',
    lcd: 'Yes',
    cpu: 'Yes',
    mouse: 'Yes',
    keyboard: 'Yes',
    headphones: 'Yes',
    internet: 'Yes',
    condition: 'Good',
    deductions: 0,
  });

  const centers = [
    'Mars BPO Saddar',
    'Mars BPO Adayala',
    'Mars BPO 0.2',
    'Mars BPO Silk',
    'Mars BPO Khanapul',
    'Mars BPO Karachi',
    'Mars BPO Capital',
  ];

  const deductionRates = {
    Headphones: 500,
    Mouse: 300,
    Keyboard: 400,
  };

  const filteredEmployees = employees.filter(emp =>
    emp.center === selectedCenter &&
    (emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     emp.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCondition === 'All' || emp.condition === filterCondition)
  );

  const summary = {
    totalDevices: filteredEmployees.reduce((sum, emp) =>
      sum +
      (emp.lcd === 'Yes' ? 1 : 0) +
      (emp.cpu === 'Yes' ? 1 : 0) +
      (emp.mouse === 'Yes' ? 1 : 0) +
      (emp.keyboard === 'Yes' ? 1 : 0) +
      (emp.headphones === 'Yes' ? 1 : 0),
      0
    ),
    faultyDevices: filteredEmployees.filter(emp => emp.condition === 'Faulty').length,
    totalDeductions: filteredEmployees.reduce((sum, emp) => sum + emp.deductions, 0),
    activeEmployees: filteredEmployees.length,
  };

  const handleReportIssue = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleReplaceDevice = (employeeId) => {
    setEmployees(employees.map(emp =>
      emp.id === employeeId ? { ...emp, condition: 'Good' } : emp
    ));
  };

  const handleSubmitIssue = () => {
    if (issueDevice && selectedEmployee) {
      setEmployees(employees.map(emp =>
        emp.id === selectedEmployee.id
          ? {
              ...emp,
              condition: 'Faulty',
              deductions: emp.deductions + deductionRates[issueDevice],
            }
          : emp
      ));
      setIsModalOpen(false);
      setIssueDevice('');
      alert(`Issue reported for ${selectedEmployee.name}. PKR ${deductionRates[issueDevice]} deducted.`);
    }
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, newEmployee]);
    setNewEmployee({
      id: '',
      name: '',
      center: 'Mars BPO Saddar',
      lcd: 'Yes',
      cpu: 'Yes',
      mouse: 'Yes',
      keyboard: 'Yes',
      headphones: 'Yes',
      internet: 'Yes',
      condition: 'Good',
      deductions: 0,
    });
    setIsAddModalOpen(false);
    alert("Employee added successfully.");
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredEmployees);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'IT Support');
    XLSX.writeFile(wb, 'it_support_report.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(`IT Support Report - ${selectedCenter}`, 14, 15);
    doc.autoTable({
      startY: 20,
      head: [['Employee Name', 'ID', 'LCD', 'CPU', 'Mouse', 'Keyboard', 'Headphones', 'Internet', 'Condition', 'Deductions']],
      body: filteredEmployees.map(emp => [
        emp.name,
        emp.id,
        emp.lcd,
        emp.cpu,
        emp.mouse,
        emp.keyboard,
        emp.headphones,
        emp.internet,
        emp.condition,
        emp.deductions,
      ]),
    });
    doc.save('it_support_report.pdf');
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {['Total Devices', 'Faulty Devices', 'Deductions (PKR)', 'Active Employees'].map((label, i) => (
          <div key={label} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold dark:text-white">{label}</h3>
            <p className="text-2xl dark:text-white">
              {Object.values(summary)[i]}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <select
          className="p-2 rounded bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600"
          value={selectedCenter}
          onChange={(e) => setSelectedCenter(e.target.value)}
        >
          {centers.map(center => (
            <option key={center} value={center}>{center}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by name or ID"
          className="p-2 rounded bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 rounded bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600"
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
        >
          <option value="All">All Conditions</option>
          <option value="Good">Good</option>
          <option value="Faulty">Faulty</option>
        </select>

        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => setIsAddModalOpen(true)}
          >
            + Add Employee
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={exportToExcel}
          >
            Export Excel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={exportToPDF}
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-700 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-600">
              {['Employee Name', 'ID', 'LCD', 'CPU', 'Mouse', 'Keyboard', 'Headphones', 'Internet', 'Condition', 'Actions'].map(col => (
                <th key={col} className="p-3 text-left dark:text-white">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp.id} className="border-b dark:border-gray-600">
                {['name', 'id', 'lcd', 'cpu', 'mouse', 'keyboard', 'headphones', 'internet', 'condition'].map(key => (
                  <td key={key} className="p-3 dark:text-white">{emp[key]}</td>
                ))}
                <td className="p-3">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded mr-2 hover:bg-red-600"
                    onClick={() => handleReportIssue(emp)}
                  >
                    Report Issue
                  </button>
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => handleReplaceDevice(emp.id)}
                    disabled={emp.condition === 'Good'}
                  >
                    Replace Device
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Report Issue Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Report Issue for {selectedEmployee?.name}</h2>
            <select
              className="w-full p-2 mb-4 rounded bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600"
              value={issueDevice}
              onChange={(e) => setIssueDevice(e.target.value)}
            >
              <option value="">Select Device</option>
              <option value="Headphones">Headphones (PKR 500)</option>
              <option value="Mouse">Mouse (PKR 300)</option>
              <option value="Keyboard">Keyboard (PKR 400)</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmitIssue}
                disabled={!issueDevice}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Add New Employee</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Employee ID" className="p-2 border rounded dark:bg-gray-600 dark:text-white" value={newEmployee.id} onChange={e => setNewEmployee({ ...newEmployee, id: e.target.value })} />
              <input type="text" placeholder="Name" className="p-2 border rounded dark:bg-gray-600 dark:text-white" value={newEmployee.name} onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })} />
              <select className="p-2 border rounded dark:bg-gray-600 dark:text-white col-span-2" value={newEmployee.center} onChange={e => setNewEmployee({ ...newEmployee, center: e.target.value })}>
                {centers.map(center => <option key={center} value={center}>{center}</option>)}
              </select>
              {['lcd', 'cpu', 'mouse', 'keyboard', 'headphones', 'internet'].map(device => (
                <select key={device} className="p-2 border rounded dark:bg-gray-600 dark:text-white" value={newEmployee[device]} onChange={e => setNewEmployee({ ...newEmployee, [device]: e.target.value })}>
                  <option value="Yes">{device.toUpperCase()} - Yes</option>
                  <option value="No">{device.toUpperCase()} - No</option>
                </select>
              ))}
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded hover:bg-gray-400" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={handleAddEmployee}>Add Employee</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ITSupport;
