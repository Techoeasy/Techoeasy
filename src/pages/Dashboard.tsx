import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHome from '../components/dashboard/DashboardHome';
import CoursesList from '../components/dashboard/CoursesList';
import StudentsList from '../components/dashboard/StudentsList';
import QuizBuilder from '../components/dashboard/QuizBuilder';
import Certificates from '../components/dashboard/Certificates';
import Settings from '../components/dashboard/Settings';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
      />
      
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/quizzes" element={<QuizBuilder />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;