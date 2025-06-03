import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Download,
  MoreHorizontal,
  ChevronDown,
  SmilePlus,
  Meh,
  Frown
} from 'lucide-react';

interface StudentData {
  id: number;
  name: string;
  email: string;
  course: string;
  progress: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  lastActive: string;
}

const StudentsList: React.FC = () => {
  const students: StudentData[] = [
    {
      id: 1,
      name: "Emma Thompson",
      email: "emma.t@example.com",
      course: "Introduction to AI",
      progress: 87,
      sentiment: "positive",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "James Wilson",
      email: "j.wilson@example.com",
      course: "Python for Data Science",
      progress: 62,
      sentiment: "neutral",
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "Sofia Martinez",
      email: "sofia.m@example.com",
      course: "Web Development Bootcamp",
      progress: 38,
      sentiment: "negative",
      lastActive: "3 hours ago"
    },
    {
      id: 4,
      name: "David Chen",
      email: "d.chen@example.com",
      course: "Advanced Algorithms",
      progress: 91,
      sentiment: "positive",
      lastActive: "Just now"
    },
    {
      id: 5,
      name: "Aisha Johnson",
      email: "aisha.j@example.com",
      course: "Mobile App Development",
      progress: 45,
      sentiment: "neutral",
      lastActive: "5 hours ago"
    },
    {
      id: 6,
      name: "Michael Brown",
      email: "m.brown@example.com",
      course: "Deep Learning Specialization",
      progress: 15,
      sentiment: "negative",
      lastActive: "1 week ago"
    },
    {
      id: 7,
      name: "Lucas Garcia",
      email: "l.garcia@example.com",
      course: "Introduction to AI",
      progress: 74,
      sentiment: "positive",
      lastActive: "4 hours ago"
    },
    {
      id: 8,
      name: "Olivia Taylor",
      email: "o.taylor@example.com",
      course: "Python for Data Science",
      progress: 55,
      sentiment: "neutral",
      lastActive: "2 days ago"
    }
  ];

  const sentimentIcons = {
    positive: <SmilePlus size={18} className="text-green-500" />,
    neutral: <Meh size={18} className="text-gray-500" />,
    negative: <Frown size={18} className="text-red-500" />
  };

  const getProgressColor = (progress: number) => {
    if (progress < 40) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
          <p className="text-gray-600">Monitor student progress and engagement</p>
        </div>
        <motion.button
          className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={18} className="mr-2" />
          <span>Add Student</span>
        </motion.button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center hover:bg-gray-50">
              <Filter size={18} className="mr-2 text-gray-500" />
              <span>Filter</span>
              <ChevronDown size={16} className="ml-2 text-gray-500" />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center hover:bg-gray-50">
              <Download size={18} className="mr-2 text-gray-500" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Students Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Total Students", value: "1,248", color: "bg-blue-100 text-blue-800" },
          { title: "Highly Engaged", value: "724", color: "bg-green-100 text-green-800" },
          { title: "At Risk", value: "126", color: "bg-red-100 text-red-800" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-gray-500 font-medium mb-2">{stat.title}</h3>
            <div className="flex items-end">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${stat.color}`}>
                {index === 0 ? "+12.5%" : index === 1 ? "+8.7%" : "-3.2%"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Students Table */}
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sentiment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{student.name}</div>
                        <div className="text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`h-2.5 rounded-full ${getProgressColor(student.progress)}`} 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-700">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {sentimentIcons[student.sentiment]}
                      <span className="ml-2 capitalize">{student.sentiment}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {student.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-500 hover:text-gray-700">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
          <div className="text-gray-500 text-sm">
            Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">1,248</span> students
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentsList;