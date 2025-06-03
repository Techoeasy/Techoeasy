import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Award, 
  Download, 
  Eye, 
  Edit, 
  Trash,
  CheckCircle
} from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  courseName: string;
  issued: string;
  status: 'draft' | 'active';
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: '1',
      name: 'Introduction to AI Certificate',
      courseName: 'Introduction to AI',
      issued: '156 times',
      status: 'active'
    },
    {
      id: '2',
      name: 'Python for Data Science Certificate',
      courseName: 'Python for Data Science',
      issued: '124 times',
      status: 'active'
    },
    {
      id: '3',
      name: 'Web Development Bootcamp Certificate',
      courseName: 'Web Development Bootcamp',
      issued: '201 times',
      status: 'active'
    },
    {
      id: '4',
      name: 'Advanced Algorithms Certificate',
      courseName: 'Advanced Algorithms',
      issued: '87 times',
      status: 'active'
    },
    {
      id: '5',
      name: 'Mobile App Development Certificate',
      courseName: 'Mobile App Development',
      issued: '0 times',
      status: 'draft'
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Certificates</h1>
          <p className="text-gray-600">Manage and create certificates for your courses</p>
        </div>
        <motion.button
          className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={18} className="mr-2" />
          <span>Create Certificate</span>
        </motion.button>
      </div>
      
      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search certificates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>
      
      {/* Certificate Preview */}
      <motion.div
        className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-64 bg-gradient-to-r from-primary to-accent">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <Award size={64} className="mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">Certificate of Completion</h2>
            <p className="text-center mb-4">This certifies that</p>
            <p className="text-xl font-bold mb-1">[Student Name]</p>
            <p className="text-center">
              has successfully completed the course<br />
              <span className="font-bold">Introduction to AI</span>
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg">
              <Eye size={18} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg">
              <Download size={18} />
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Certificates List */}
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Certificate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issued
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {certificates.map((certificate) => (
                <tr key={certificate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        <Award size={20} />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{certificate.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {certificate.courseName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {certificate.issued}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      certificate.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {certificate.status === 'active' && (
                        <CheckCircle size={12} className="mr-1" />
                      )}
                      {certificate.status === 'active' ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-gray-500 hover:text-gray-700 p-1">
                        <Eye size={18} />
                      </button>
                      <button className="text-gray-500 hover:text-primary p-1">
                        <Edit size={18} />
                      </button>
                      <button className="text-gray-500 hover:text-red-500 p-1">
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificates;