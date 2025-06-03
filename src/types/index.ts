export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'instructor' | 'student' | 'assistant';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  students: number;
  lessons: number;
  duration: string;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
}

export interface Student {
  id: number;
  name: string;
  email: string;
  courseId: string;
  progress: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  lastActive: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  aiDifficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Certificate {
  id: string;
  name: string;
  courseId: string;
  courseName: string;
  issued: string;
  status: 'draft' | 'active';
}