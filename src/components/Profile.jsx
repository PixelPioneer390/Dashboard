import { useState } from 'react';
import { User, Mail, Phone, Lock, Bell, Camera } from 'lucide-react';

export default function Profile() {
  // State for form inputs
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    password: '',
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  // Handle profile input changes
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
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
  const saveChanges = () => {
    console.log('Saving profile:', { ...profile, notifications });
    // Implement API call or localStorage save here
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <User className="h-12 w-12 text-gray-500 dark:text-gray-400" />
            </div>
            <label className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600">
              <Camera className="h-4 w-4" />
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicture}
                className="hidden"
              />
            </label>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{profile.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{profile.email}</p>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Profile Settings</h3>
          
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center">
              <User className="h-4 w-4 mr-2" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center">
              <Mail className="h-4 w-4 mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center">
              <Phone className="h-4 w-4 mr-2" /> Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1 flex items-center">
              <Lock className="h-4 w-4 mr-2" /> Password
            </label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Notification Preferences */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 flex items-center">
              <Bell className="h-4 w-4 mr-2" /> Notification Preferences
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Email Notifications</span>
                <button
                  onClick={() => handleNotificationToggle('email')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    notifications.email ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
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
                <span className="text-sm text-gray-600 dark:text-gray-400">SMS Alerts</span>
                <button
                  onClick={() => handleNotificationToggle('sms')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    notifications.sms ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
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
                <span className="text-sm text-gray-600 dark:text-gray-400">Push Notifications</span>
                <button
                  onClick={() => handleNotificationToggle('push')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    notifications.push ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
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
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-end">
            <button
              onClick={saveChanges}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}