'use client';

import type React from 'react';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function CoursePreviewQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "What is the main purpose of Polkadot's relay chain?",
      options: [
        'To execute smart contracts',
        'To provide shared security and interoperability between parachains',
        'To store user data',
        'To mine new tokens',
      ],
      correctAnswer: 1,
      explanation:
        'The relay chain is the central chain of Polkadot. Its main purpose is to provide shared security for the entire network and enable cross-chain interoperability between parachains.',
    },
    {
      id: 2,
      text: 'Which programming language is primarily used for Substrate development?',
      options: ['JavaScript', 'Python', 'Rust', 'Solidity'],
      correctAnswer: 2,
      explanation:
        'Rust is the primary programming language used for Substrate development due to its performance, safety, and memory efficiency features.',
    },
    {
      id: 3,
      text: 'What is a parachain in the Polkadot ecosystem?',
      options: [
        'A parallel processing unit',
        'A custom blockchain that connects to the Polkadot network',
        'A type of cryptocurrency',
        'A consensus algorithm',
      ],
      correctAnswer: 1,
      explanation:
        'Parachains are custom, project-specific blockchains that connect to the Polkadot relay chain and benefit from its security and interoperability features.',
    },
    {
      id: 4,
      text: 'What is ink! in the context of Polkadot development?',
      options: [
        'A visualization library',
        'A smart contract programming language',
        'A testing framework',
        'A deployment tool',
      ],
      correctAnswer: 1,
      explanation:
        'ink! is a Rust-based programming language specifically designed for writing smart contracts on Substrate-based blockchains in the Polkadot ecosystem.',
    },
    {
      id: 5,
      text: 'What does XCM stand for in Polkadot?',
      options: [
        'Cross-Chain Mining',
        'Cross-Chain Messaging',
        'Extended Chain Management',
        'External Chain Monitoring',
      ],
      correctAnswer: 1,
      explanation:
        "XCM stands for Cross-Chain Messaging. It's a format for communication between different chains in the Polkadot ecosystem, enabling interoperability.",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    setIsAnswerSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <h3 className="text-xl font-bold">Sample Quiz</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${getProgressPercentage()}%` }}
        className="h-1.5 rounded-full bg-pink-500"
        transition={{ duration: 0.5 }}
      />

      <AnimatePresence mode="wait">
        {!quizCompleted ? (
          <motion.div
            key={`question-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800">
              <h4 className="mb-4 text-lg font-medium">{currentQuestion.text}</h4>

              <RadioGroup value={selectedOption?.toString()} className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center rounded-lg border p-4 transition-colors ${
                      isAnswerSubmitted
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20'
                          : selectedOption === index
                            ? 'border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                        : selectedOption === index
                          ? 'border-pink-200 bg-pink-50 dark:border-pink-900/50 dark:bg-pink-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      disabled={isAnswerSubmitted}
                      className="mr-2"
                    />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                    {isAnswerSubmitted && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        {index === currentQuestion.correctAnswer ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : selectedOption === index ? (
                          <XCircle className="h-5 w-5 text-red-500" />
                        ) : null}
                      </div>
                    )}
                  </div>
                ))}
              </RadioGroup>

              {isAnswerSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                    <div>
                      <h5 className="font-medium text-blue-700 dark:text-blue-300">Explanation</h5>
                      <p className="text-sm text-blue-600 dark:text-blue-200">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex justify-between">
              {!isAnswerSubmitted ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="rounded-full bg-pink-600 hover:bg-pink-500"
                >
                  Check Answer
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="rounded-full bg-pink-600 hover:bg-pink-500"
                >
                  {currentQuestionIndex < questions.length - 1 ? (
                    <>
                      Next Question <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    'Complete Quiz'
                  )}
                </Button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-800">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300">
                <Trophy className="h-10 w-10" />
              </div>
              <h4 className="mb-2 text-2xl font-bold">Quiz Completed!</h4>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                You scored {score} out of {questions.length} questions correctly.
              </p>
              <div className="mb-6 flex justify-center">
                <div className="relative h-4 w-64 rounded-full bg-gray-200 dark:bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / questions.length) * 100}%` }}
                    className={`absolute left-0 top-0 h-full rounded-full ${
                      score / questions.length >= 0.7
                        ? 'bg-green-500'
                        : score / questions.length >= 0.4
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                    }`}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  {score / questions.length >= 0.7
                    ? 'Great job! You have a good understanding of Polkadot concepts.'
                    : score / questions.length >= 0.4
                      ? "Good effort! You're on your way to understanding Polkadot."
                      : 'Keep learning! The course will help you understand these concepts better.'}
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <Button onClick={resetQuiz} variant="outline" className="rounded-full">
                <RotateCcw className="mr-2 h-4 w-4" /> Try Again
              </Button>
              <Button className="rounded-full bg-pink-600 hover:bg-pink-500">
                Enroll in Full Course
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
