import { useState } from 'react';
import { User, Camera, Lock, Bell, Moon, Trash2, Power } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Settings() {
  // State for form inputs
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = useState('light');
  const [showPrompt, setShowPrompt] = useState(false);

  // Handle profile input changes
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // Handle notification toggles
  const handleNotificationToggle = (type) => {
    setNotifications({ ...notifications, [type]: !notifications[type] });
  };

  // Handle profile picture upload
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Uploading profile picture:', file.name);
      // Implement file upload logic here (e.g., to backend or localStorage)
    }
  };

  // Save profile changes
  const saveProfile = () => {
    console.log('Saving profile:', profile);
    // Implement API call or localStorage save here
  };

  // Update password
  const updatePassword = () => {
    if (passwords.new === passwords.confirm) {
      console.log('Updating password:', passwords);
      // Implement password update logic here
    } else {
      alert('New password and confirm password do not match');
    }
  };

  // Confirm account deletion
  const confirmDelete = () => {
    console.log('Account deletion confirmed');
    setShowPrompt(false);
    // Implement account deletion logic here
  };

  // Cancel deletion
  const cancelDelete = () => {
    setShowPrompt(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Profile Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow mb-6"
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <User className="h-5 w-5 mr-2 text-blue-500" /> Profile Settings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Profile Picture</label>
            <label className="flex items-center p-2 border rounded-md cursor-pointer hover:bg-gray-50">
              <Camera className="h-5 w-5 mr-2 text-gray-600" />
              <span>Upload Picture</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicture}
                className="hidden"
              />
            </label>
          </div>
        </div>
        <button
          onClick={saveProfile}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save Profile
        </button>
      </motion.div>

      {/* Password Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow mb-6"
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Lock className="h-5 w-5 mr-2 text-blue-500" /> Password Settings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Current Password</label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              name="new"
              value={passwords.new}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={updatePassword}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update Password
        </button>
      </motion.div>

      {/* Notification Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow mb-6"
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Bell className="h-5 w-5 mr-2 text-blue-500" /> Notification Preferences
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Email Notifications</span>
            <button
              onClick={() => handleNotificationToggle('email')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                notifications.email ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.email ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">SMS Alerts</span>
            <button
              onClick={() => handleNotificationToggle('sms')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                notifications.sms ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.sms ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Push Notifications</span>
            <button
              onClick={() => handleNotificationToggle('push')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                notifications.push ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications.push ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Theme Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow mb-6"
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Moon className="h-5 w-5 mr-2 text-blue-500" /> Theme Preferences
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Dark Mode</span>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              theme === 'dark' ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </motion.div>

      {/* Account Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Power className="h-5 w-5 mr-2 text-blue-500" /> Account Controls
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Deactivate Account
          </button>
          <button
            onClick={() => setShowPrompt(true)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete Account
          </button>
        </div>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Trash2 className="h-5 w-5 mr-2 text-red-500" /> Confirm Deletion
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}