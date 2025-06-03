import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  FileQuestion, 
  Award, 
  Settings,
  LogOut,
  X,
  Menu
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, to, isActive }) => {
  return (
    <Link to={to}>
      <div 
        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
          isActive 
            ? 'bg-primary/10 text-primary' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span className="ml-3 font-medium">{text}</span>
        
        {isActive && (
          <div className="ml-auto w-1.5 h-6 rounded-sm bg-primary" />
        )}
      </div>
    </Link>
  );
};

const DashboardSidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const path = location.pathname;
  
  const sidebarItems = [
    { 
      icon: <LayoutDashboard size={20} />, 
      text: 'Dashboard', 
      to: '/dashboard' 
    },
    { 
      icon: <BookOpen size={20} />, 
      text: 'Courses', 
      to: '/dashboard/courses' 
    },
    { 
      icon: <Users size={20} />, 
      text: 'Students', 
      to: '/dashboard/students' 
    },
    { 
      icon: <FileQuestion size={20} />, 
      text: 'Quizzes', 
      to: '/dashboard/quizzes' 
    },
    { 
      icon: <Award size={20} />, 
      text: 'Certificates', 
      to: '/dashboard/certificates' 
    },
    { 
      icon: <Settings size={20} />, 
      text: 'Settings', 
      to: '/dashboard/settings' 
    }
  ];

  const isActive = (itemPath: string) => {
    if (itemPath === '/dashboard') {
      return path === '/dashboard' || path === '/dashboard/';
    }
    return path.startsWith(itemPath);
  };

  // Mobile sidebar backdrop
  const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
      onClick={onClick}
    />
  );

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      
      {/* Mobile backdrop */}
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
      
      {/* Sidebar */}
      <motion.div
        className={`fixed md:relative inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        initial={false}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-4 py-5 flex items-center justify-between border-b">
            <Link to="/dashboard" className="flex items-center">
  <img 
    src="/Logo.svg" 
    alt="TechoEasy Logo" 
    className="h-20 w-15 mr-2" 
  />
  
</Link>

            {/* Close button (mobile only) */}
            <button 
              className="md:hidden text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {sidebarItems.map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                text={item.text}
                to={item.to}
                isActive={isActive(item.to)}
              />
            ))}
          </nav>
          
          {/* User section */}
          <div className="border-t px-4 py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                AJ
              </div>
              <div className="ml-3">
                <p className="font-medium">Alex Johnson</p>
                <p className="text-sm text-gray-500">Instructor</p>
              </div>
            </div>
            
            <button
  onClick={() => window.location.href = "https://techoeasy.com/"}
  className="mt-4 flex items-center text-gray-600 hover:text-primary transition-colors w-full"
>
  <LogOut size={18} className="mr-2" />
  <span>Logout</span>
</button>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DashboardSidebar;