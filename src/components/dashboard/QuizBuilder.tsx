import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Trash, 
  Check, 
  X, 
  ChevronDown, 
  Sparkles,
  FileText,
  Save
} from 'lucide-react';

interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options: QuestionOption[];
  aiDifficulty: 'Easy' | 'Medium' | 'Hard';
}

const QuizBuilder: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      text: 'What is the primary benefit of using artificial intelligence in education?',
      type: 'multiple-choice',
      options: [
        { id: '1a', text: 'Reducing teacher workload', isCorrect: false },
        { id: '1b', text: 'Personalized learning experiences', isCorrect: true },
        { id: '1c', text: 'Replacing human instructors', isCorrect: false },
        { id: '1d', text: 'Eliminating homework', isCorrect: false }
      ],
      aiDifficulty: 'Medium'
    },
    {
      id: '2',
      text: 'True or False: Machine learning is a subset of artificial intelligence.',
      type: 'true-false',
      options: [
        { id: '2a', text: 'True', isCorrect: true },
        { id: '2b', text: 'False', isCorrect: false }
      ],
      aiDifficulty: 'Easy'
    }
  ]);
  
  const [activeQuestion, setActiveQuestion] = useState<string | null>('1');
  const [quizTitle, setQuizTitle] = useState("Introduction to AI Concepts");
  const [quizDescription, setQuizDescription] = useState("Test your knowledge of basic artificial intelligence concepts and applications in education.");

  const addNewQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      text: 'New question',
      type: 'multiple-choice',
      options: [
        { id: `${Date.now()}-a`, text: 'Option 1', isCorrect: false },
        { id: `${Date.now()}-b`, text: 'Option 2', isCorrect: true }
      ],
      aiDifficulty: 'Medium'
    };
    
    setQuestions([...questions, newQuestion]);
    setActiveQuestion(newQuestion.id);
  };

  const updateQuestionText = (id: string, text: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, text } : q
    ));
  };

  const updateOptionText = (questionId: string, optionId: string, text: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { 
            ...q, 
            options: q.options.map(o => 
              o.id === optionId ? { ...o, text } : o
            )
          } 
        : q
    ));
  };

  const toggleCorrectOption = (questionId: string, optionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { 
            ...q, 
            options: q.options.map(o => 
              q.type === 'multiple-choice' 
                ? { ...o, isCorrect: o.id === optionId ? !o.isCorrect : o.isCorrect }
                : { ...o, isCorrect: o.id === optionId }
            )
          } 
        : q
    ));
  };

  const addOption = (questionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { 
            ...q, 
            options: [...q.options, { 
              id: `${Date.now()}`, 
              text: 'New option', 
              isCorrect: false 
            }]
          } 
        : q
    ));
  };

  const removeOption = (questionId: string, optionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { 
            ...q, 
            options: q.options.filter(o => o.id !== optionId)
          } 
        : q
    ));
  };

  const removeQuestion = (id: string) => {
    const newQuestions = questions.filter(q => q.id !== id);
    setQuestions(newQuestions);
    
    if (activeQuestion === id) {
      setActiveQuestion(newQuestions.length > 0 ? newQuestions[0].id : null);
    }
  };

  const changeQuestionType = (id: string, type: Question['type']) => {
    setQuestions(questions.map(q => 
      q.id === id 
        ? { 
            ...q, 
            type,
            options: type === 'true-false' 
              ? [
                  { id: `${Date.now()}-true`, text: 'True', isCorrect: true },
                  { id: `${Date.now()}-false`, text: 'False', isCorrect: false }
                ]
              : type === 'short-answer'
                ? []
                : q.options
          } 
        : q
    ));
  };

  const changeDifficulty = (id: string, difficulty: Question['aiDifficulty']) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, aiDifficulty: difficulty } : q
    ));
  };

  const getActiveQuestion = () => {
    return questions.find(q => q.id === activeQuestion) || null;
  };

  const getDifficultyColor = (difficulty: Question['aiDifficulty']) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Hard': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Quiz Builder</h1>
          <p className="text-gray-600">Create and manage assessment content</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <motion.button
            className="bg-accent/90 hover:bg-accent text-white font-medium px-4 py-2 rounded-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={18} className="mr-2" />
            <span>Generate with AI</span>
          </motion.button>
          <motion.button
            className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Save size={18} className="mr-2" />
            <span>Save Quiz</span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quiz List Panel */}
        <div className="lg:col-span-1">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4">
              <label htmlFor="quiz-title" className="block text-sm font-medium text-gray-700 mb-1">
                Quiz Title
              </label>
              <input
                id="quiz-title"
                type="text"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quiz-description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="quiz-description"
                value={quizDescription}
                onChange={(e) => setQuizDescription(e.target.value)}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Questions</h3>
              <span className="text-sm text-gray-500">{questions.length} questions</span>
            </div>
            <div className="space-y-2 mb-4">
              {questions.map((question, index) => (
                <div 
                  key={question.id}
                  className={`p-3 rounded-lg cursor-pointer flex items-center justify-between ${
                    activeQuestion === question.id 
                      ? 'bg-primary/10 border border-primary/30' 
                      : 'hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => setActiveQuestion(question.id)}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm mr-3">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium truncate max-w-[180px]">
                      {question.text}
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(question.aiDifficulty)}`}>
                    {question.aiDifficulty}
                  </span>
                </div>
              ))}
            </div>
            <button
              className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium flex items-center justify-center hover:bg-gray-50"
              onClick={addNewQuestion}
            >
              <Plus size={18} className="mr-2" />
              Add Question
            </button>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <FileText size={20} className="text-primary mr-2" />
              <h3 className="font-semibold">Quiz Settings</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Limit
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>No time limit</option>
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passing Score
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>60%</option>
                  <option>70%</option>
                  <option>80%</option>
                  <option>90%</option>
                </select>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="shuffle" className="mr-2" />
                <label htmlFor="shuffle" className="text-sm text-gray-700">
                  Shuffle questions
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="show-results" className="mr-2" />
                <label htmlFor="show-results" className="text-sm text-gray-700">
                  Show results immediately
                </label>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Question Editor Panel */}
        <div className="lg:col-span-2">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeQuestion && getActiveQuestion() ? (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-semibold">Question Editor</h3>
                    <p className="text-sm text-gray-500">
                      Edit your question content and options
                    </p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 flex items-center"
                    onClick={() => removeQuestion(activeQuestion)}
                  >
                    <Trash size={18} className="mr-1" />
                    <span>Delete</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Question Type Selector */}
                  <div className="flex flex-wrap gap-4">
                    {['multiple-choice', 'true-false', 'short-answer'].map((type) => (
                      <button
                        key={type}
                        className={`px-4 py-2 rounded-lg border ${
                          getActiveQuestion()?.type === type
                            ? 'bg-primary text-white border-primary'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => changeQuestionType(activeQuestion, type as Question['type'])}
                      >
                        {type === 'multiple-choice' ? 'Multiple Choice' : 
                         type === 'true-false' ? 'True/False' : 
                         'Short Answer'}
                      </button>
                    ))}
                  </div>

                  {/* Question Text */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question Text
                    </label>
                    <textarea
                      value={getActiveQuestion()?.text}
                      onChange={(e) => updateQuestionText(activeQuestion, e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  {/* AI Difficulty Selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      AI Difficulty Assessment
                    </label>
                    <div className="flex gap-3">
                      {['Easy', 'Medium', 'Hard'].map((difficulty) => (
                        <button
                          key={difficulty}
                          className={`px-4 py-2 rounded-lg ${
                            getActiveQuestion()?.aiDifficulty === difficulty
                              ? getDifficultyColor(difficulty as Question['aiDifficulty'])
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          onClick={() => changeDifficulty(activeQuestion, difficulty as Question['aiDifficulty'])}
                        >
                          {difficulty}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Options (for multiple choice and true/false) */}
                  {getActiveQuestion()?.type !== 'short-answer' && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Answer Options
                        </label>
                        {getActiveQuestion()?.type === 'multiple-choice' && (
                          <button
                            className="text-primary text-sm flex items-center"
                            onClick={() => addOption(activeQuestion)}
                          >
                            <Plus size={16} className="mr-1" />
                            Add Option
                          </button>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        {getActiveQuestion()?.options.map((option) => (
                          <div key={option.id} className="flex items-center">
                            <button
                              className={`flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                                option.isCorrect
                                  ? 'bg-green-500 text-white'
                                  : 'border border-gray-300 hover:border-gray-400'
                              }`}
                              onClick={() => toggleCorrectOption(activeQuestion, option.id)}
                            >
                              {option.isCorrect && <Check size={14} />}
                            </button>
                            <input
                              type="text"
                              value={option.text}
                              onChange={(e) => updateOptionText(activeQuestion, option.id, e.target.value)}
                              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            {getActiveQuestion()?.type === 'multiple-choice' && getActiveQuestion()?.options.length > 2 && (
                              <button
                                className="ml-2 text-gray-400 hover:text-red-500"
                                onClick={() => removeOption(activeQuestion, option.id)}
                              >
                                <X size={18} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Short Answer (if applicable) */}
                  {getActiveQuestion()?.type === 'short-answer' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sample Answer (for grading reference)
                      </label>
                      <textarea
                        placeholder="Enter a sample correct answer..."
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="text-gray-400 mb-4">
                  <FileText size={48} />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">No Question Selected</h3>
                <p className="text-gray-500 text-center mb-4">
                  Select a question from the list or create a new one to start editing
                </p>
                <button
                  className="px-4 py-2 bg-primary text-white rounded-lg flex items-center"
                  onClick={addNewQuestion}
                >
                  <Plus size={18} className="mr-2" />
                  Create New Question
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuizBuilder;