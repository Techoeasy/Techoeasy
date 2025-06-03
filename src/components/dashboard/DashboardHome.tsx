import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Activity, 
  FileQuestion,
  AlertTriangle 
} from 'lucide-react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  positive: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, positive, delay }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg text-primary">
          {icon}
        </div>
      </div>
      <div className={`mt-4 text-sm flex items-center ${positive ? 'text-green-600' : 'text-red-500'}`}>
        <span>{change}</span>
        <span className="ml-1 text-gray-500">vs last month</span>
      </div>
    </motion.div>
  );
};

const DashboardHome: React.FC = () => {
  // Line chart data
  const engagementData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Students',
        data: [50, 60, 70, 65, 80, 40, 55],
        borderColor: '#235DF5',
        backgroundColor: 'rgba(35, 93, 245, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const engagementOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Doughnut chart data
  const completionData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#10B981', '#235DF5', '#F87171'],
        borderWidth: 0,
      },
    ],
  };

  const completionOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '70%',
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
          <p className="text-gray-600">Here's what's happening with your courses today.</p>
        </div>
        <motion.button
          className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>New Course</span>
        </motion.button>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Students"
          value="1,248"
          icon={<Users size={24} />}
          change="+12.5%"
          positive={true}
          delay={0.1}
        />
        <StatCard
          title="Active Courses"
          value="8"
          icon={<BookOpen size={24} />}
          change="+4.3%"
          positive={true}
          delay={0.2}
        />
        <StatCard
          title="Completion Rate"
          value="76%"
          icon={<Activity size={24} />}
          change="-2.5%"
          positive={false}
          delay={0.3}
        />
        <StatCard
          title="Quizzes Created"
          value="142"
          icon={<FileQuestion size={24} />}
          change="+18.2%"
          positive={true}
          delay={0.4}
        />
      </div>
      
      {/* AI Insights */}
      <motion.div
        className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-start">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
            <AlertTriangle size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">AI-Driven Insights</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                3 students are struggling with Module 2: Advanced Algorithms
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Quiz #4 has a lower than expected completion rate (62%)
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Student engagement is highest on Wednesdays - consider scheduling live sessions
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-4">Student Engagement</h3>
          <div className="h-64">
            <Line data={engagementData} options={engagementOptions} />
          </div>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-bold mb-4">Course Completion</h3>
          <div className="h-64 flex items-center justify-center">
            <Doughnut data={completionData} options={completionOptions} />
          </div>
        </motion.div>
      </div>
      
      {/* Recent Activity */}
      <motion.div
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-start pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 mr-3">
                <img 
                  src={`https://i.pravatar.cc/40?img=${item + 10}`} 
                  alt="Student Avatar" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-medium">Student {item}</span> {' '}
                  {item % 2 === 0 
                    ? 'completed Quiz #3 with a score of 92%' 
                    : 'asked a question in Module 4: Data Structures'}
                </p>
                <p className="text-sm text-gray-500">
                  {item % 2 === 0 ? '2 hours ago' : '4 hours ago'}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`text-xs px-2 py-1 rounded ${
                  item % 2 === 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {item % 2 === 0 ? 'Quiz' : 'Question'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;