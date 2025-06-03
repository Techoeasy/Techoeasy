import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Users, 
  Lock, 
  Bell, 
  Globe, 
  MessageSquare, 
  Save,
  Check
} from 'lucide-react';

interface TabProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ icon, title, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center p-3 rounded-lg w-full transition-colors ${
        isActive 
          ? 'bg-primary/10 text-primary font-medium' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3">{title}</span>
    </button>
  );
};

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('roles');
  const [showSaved, setShowSaved] = useState(false);

  const handleSave = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600">Manage your account and system preferences</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="space-y-1">
              <Tab
                icon={<User size={20} className="text-gray-500" />}
                title="Profile"
                isActive={activeTab === 'profile'}
                onClick={() => setActiveTab('profile')}
              />
              <Tab
                icon={<Users size={20} className="text-gray-500" />}
                title="Roles & Permissions"
                isActive={activeTab === 'roles'}
                onClick={() => setActiveTab('roles')}
              />
              <Tab
                icon={<Lock size={20} className="text-gray-500" />}
                title="Security"
                isActive={activeTab === 'security'}
                onClick={() => setActiveTab('security')}
              />
              <Tab
                icon={<Bell size={20} className="text-gray-500" />}
                title="Notifications"
                isActive={activeTab === 'notifications'}
                onClick={() => setActiveTab('notifications')}
              />
              <Tab
                icon={<Globe size={20} className="text-gray-500" />}
                title="Integration"
                isActive={activeTab === 'integration'}
                onClick={() => setActiveTab('integration')}
              />
              <Tab
                icon={<MessageSquare size={20} className="text-gray-500" />}
                title="AI Assistant"
                isActive={activeTab === 'ai'}
                onClick={() => setActiveTab('ai')}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Main Content */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === 'roles' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Roles & Permissions</h2>
                  <motion.button
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                  >
                    {showSaved ? (
                      <>
                        <Check size={18} className="mr-2" />
                        Saved!
                      </>
                    ) : (
                      <>
                        <Save size={18} className="mr-2" />
                        Save Changes
                      </>
                    )}
                  </motion.button>
                </div>
                
                <div className="space-y-8">
                  {/* Role Types */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Manage Roles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'Administrator', desc: 'Full access to all system features', count: 2 },
                        { name: 'Instructor', desc: 'Can create and manage courses and students', count: 8 },
                        { name: 'Student', desc: 'Can access assigned courses and quizzes', count: 1248 },
                        { name: 'Assistant', desc: 'Limited instructor capabilities', count: 4 }
                      ].map((role, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{role.name}</h4>
                              <p className="text-sm text-gray-500">{role.desc}</p>
                            </div>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                              {role.count} users
                            </span>
                          </div>
                          <div className="mt-4 flex space-x-2">
                            <button className="text-sm text-primary hover:underline">
                              Edit
                            </button>
                            <button className="text-sm text-gray-500 hover:underline">
                              View Users
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Permissions Table */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Permission Matrix</h3>
                    <div className="overflow-x-auto border border-gray-200 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Permission
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Administrator
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Instructor
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Student
                            </th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Assistant
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            { name: 'View Courses', admin: true, instructor: true, student: true, assistant: true },
                            { name: 'Create Courses', admin: true, instructor: true, student: false, assistant: false },
                            { name: 'Edit Courses', admin: true, instructor: true, student: false, assistant: true },
                            { name: 'Delete Courses', admin: true, instructor: false, student: false, assistant: false },
                            { name: 'Manage Students', admin: true, instructor: true, student: false, assistant: true },
                            { name: 'View Analytics', admin: true, instructor: true, student: false, assistant: true },
                            { name: 'System Settings', admin: true, instructor: false, student: false, assistant: false },
                          ].map((permission, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {permission.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <input type="checkbox" checked={permission.admin} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <input type="checkbox" checked={permission.instructor} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <input type="checkbox" checked={permission.student} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                <input type="checkbox" checked={permission.assistant} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab !== 'roles' && (
              <div className="flex flex-col items-center justify-center py-12">
                <h2 className="text-xl font-bold mb-4">This section is under development</h2>
                <p className="text-gray-500 text-center max-w-md mb-6">
                  We're currently working on implementing the {activeTab} settings. 
                  These options will be available in the next update.
                </p>
                <button 
                  className="px-4 py-2 bg-primary text-white rounded-lg"
                  onClick={() => setActiveTab('roles')}
                >
                  Go to Roles & Permissions
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;