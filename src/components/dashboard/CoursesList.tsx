import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Users, 
  FileText, 
  Clock 
} from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  students: number;
  lessons: number;
  duration: string;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  students, 
  lessons, 
  duration, 
  image,
  difficulty,
  index
}) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-purple-100 text-purple-800'
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-40 bg-gray-200 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical size={18} />
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{students}</span>
          </div>
          <div className="flex items-center">
            <FileText size={16} className="mr-1" />
            <span>{lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesList: React.FC = () => {
  const courses = [
    {
      title: "Introduction to AI",
      description: "Learn the fundamentals of artificial intelligence and machine learning",
      students: 356,
      lessons: 12,
      duration: "6 weeks",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      difficulty: "Easy" as const
    },
    {
      title: "Python for Data Science",
      description: "Master Python programming for data analysis and visualization",
      students: 284,
      lessons: 18,
      duration: "8 weeks",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      difficulty: "Medium" as const
    },
    {
      title: "Web Development Bootcamp",
      description: "Build modern responsive websites with HTML, CSS, and JavaScript",
      students: 412,
      lessons: 24,
      duration: "12 weeks",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      difficulty: "Medium" as const
    },
    {
      title: "Advanced Algorithms",
      description: "Deep dive into complex algorithms and computational theory",
      students: 196,
      lessons: 15,
      duration: "10 weeks",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      difficulty: "Advanced" as const
    },
    {
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications with React Native",
      students: 238,
      lessons: 20,
      duration: "9 weeks",
      image: "https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      difficulty: "Medium" as const
    },
    {
      title: "Deep Learning Specialization",
      description: "Master neural networks and deep learning frameworks",
      students: 142,
      lessons: 16,
      duration: "11 weeks",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      difficulty: "Advanced" as const
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Courses</h1>
          <p className="text-gray-600">Manage and create your educational content</p>
        </div>
        <motion.button
          className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={18} className="mr-2" />
          <span>Add New Course</span>
        </motion.button>
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="advanced">Advanced</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option value="">Sort By</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="students">Most Students</option>
          </select>
        </div>
      </div>

      {/* Courses grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            students={course.students}
            lessons={course.lessons}
            duration={course.duration}
            image={course.image}
            difficulty={course.difficulty}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;