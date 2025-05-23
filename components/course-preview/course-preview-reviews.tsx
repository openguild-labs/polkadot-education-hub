'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

interface CoursePreviewReviewsProps {
  rating: number;
  reviews: number;
}

export default function CoursePreviewReviews({
  rating,
  reviews: totalReviews,
}: CoursePreviewReviewsProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const reviewData = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: '/images/avatar-1.png',
      date: '2 months ago',
      rating: 5,
      comment:
        "This course exceeded my expectations! The instructor explains complex Polkadot concepts in a way that's easy to understand. The hands-on projects really helped solidify my understanding.",
      helpful: 24,
      isHelpful: false,
    },
    {
      id: 2,
      name: 'Sarah Chen',
      avatar: '/images/avatar-2.png',
      date: '1 month ago',
      rating: 4,
      comment:
        'Great course overall. The content is comprehensive and well-structured. I especially enjoyed the sections on parachain development. My only suggestion would be to add more examples for the more advanced topics.',
      helpful: 18,
      isHelpful: false,
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      avatar: '/images/avatar-3.png',
      date: '3 weeks ago',
      rating: 5,
      comment:
        "As someone coming from Ethereum development, this course made the transition to Polkadot seamless. The instructor's deep knowledge of both ecosystems really shines through. Highly recommended!",
      helpful: 32,
      isHelpful: true,
    },
    {
      id: 4,
      name: 'Emily Wong',
      avatar: '/images/avatar-4.png',
      date: '2 weeks ago',
      rating: 3,
      comment:
        'The course content is good, but I found some sections moved too quickly. Would have appreciated more time spent on the fundamentals before diving into advanced topics. Still learned a lot though!',
      helpful: 7,
      isHelpful: false,
    },
  ];

  const [reviews, setReviews] = useState(reviewData);

  const handleHelpful = (id: number) => {
    setReviews(
      reviews.map(review => {
        if (review.id === id) {
          return {
            ...review,
            helpful: review.isHelpful ? review.helpful - 1 : review.helpful + 1,
            isHelpful: !review.isHelpful,
          };
        }
        return review;
      })
    );
  };

  const filterReviews = (filter: string) => {
    setActiveFilter(filter);
  };

  const getFilteredReviews = () => {
    switch (activeFilter) {
      case '5star':
        return reviews.filter(review => review.rating === 5);
      case '4star':
        return reviews.filter(review => review.rating === 4);
      case '3star':
        return reviews.filter(review => review.rating === 3);
      case '2star':
        return reviews.filter(review => review.rating === 2);
      case '1star':
        return reviews.filter(review => review.rating === 1);
      default:
        return reviews;
    }
  };

  const filteredReviews = getFilteredReviews();

  // Calculate rating distribution
  const ratingDistribution = [
    { stars: 5, count: reviews.filter(r => r.rating === 5).length, percentage: 0 },
    { stars: 4, count: reviews.filter(r => r.rating === 4).length, percentage: 0 },
    { stars: 3, count: reviews.filter(r => r.rating === 3).length, percentage: 0 },
    { stars: 2, count: reviews.filter(r => r.rating === 2).length, percentage: 0 },
    { stars: 1, count: reviews.filter(r => r.rating === 1).length, percentage: 0 },
  ];

  ratingDistribution.forEach(item => {
    item.percentage = (item.count / reviews.length) * 100;
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <h3 className="text-xl font-bold">Student Reviews</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">{reviews.length} reviews</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">{rating.toFixed(1)}</div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : i < rating
                          ? 'fill-yellow-400/50 text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Course Rating</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {reviews.length} total reviews
            </div>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map(item => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="flex w-16 items-center">
                  <span className="mr-1 text-sm">{item.stars}</span>
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                </div>
                <Progress
                  value={item.percentage}
                  className="h-2 flex-1 bg-gray-200 dark:bg-gray-700"
                />
                <div className="w-10 text-right text-sm text-gray-600 dark:text-gray-300">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search reviews..." className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              className={activeFilter === 'all' ? 'bg-pink-600 hover:bg-pink-500' : ''}
              onClick={() => filterReviews('all')}
            >
              All Reviews
            </Button>
            <Button
              variant={activeFilter === '5star' ? 'default' : 'outline'}
              size="sm"
              className={activeFilter === '5star' ? 'bg-pink-600 hover:bg-pink-500' : ''}
              onClick={() => filterReviews('5star')}
            >
              5 Star
            </Button>
            <Button
              variant={activeFilter === '4star' ? 'default' : 'outline'}
              size="sm"
              className={activeFilter === '4star' ? 'bg-pink-600 hover:bg-pink-500' : ''}
              onClick={() => filterReviews('4star')}
            >
              4 Star
            </Button>
            <Button
              variant={activeFilter === '3star' ? 'default' : 'outline'}
              size="sm"
              className={activeFilter === '3star' ? 'bg-pink-600 hover:bg-pink-500' : ''}
              onClick={() => filterReviews('3star')}
            >
              3 Star
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => filterReviews('all')}
            >
              <Filter className="h-3.5 w-3.5" /> More Filters
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {filteredReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center">
                <Image
                  src={review.avatar || '/placeholder.svg?height=40&width=40'}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="mr-3 rounded-full"
                />
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-3 text-gray-600 dark:text-gray-300">{review.comment}</p>
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-1 text-xs ${
                  review.isHelpful ? 'text-pink-600 dark:text-pink-400' : ''
                }`}
                onClick={() => handleHelpful(review.id)}
              >
                <ThumbsUp className="h-3.5 w-3.5" />
                Helpful ({review.helpful})
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400">Report</span>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredReviews.length > 4 && (
        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full">
            Load More Reviews
          </Button>
        </div>
      )}
    </div>
  );
}
