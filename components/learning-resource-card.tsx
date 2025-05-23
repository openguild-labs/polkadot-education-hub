import { Card, CardContent } from './ui/card';
import { CheckCircle, Circle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { LearningResource } from '@/constants';

export const LearningResourceCard = ({ resource }: { resource: LearningResource }) => {
  const isCompleted = resource.Status === 'Done';
  const isInProgress = resource.Status === 'In progress';
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-pink-900/10">
      <CardContent className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center">
            {isCompleted ? (
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            ) : isInProgress ? (
              <Badge
                variant="outline"
                className="mr-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
              >
                In Progress
              </Badge>
            ) : (
              <Circle className="mr-2 h-5 w-5 text-gray-300 dark:text-gray-600" />
            )}
            <h3 className="line-clamp-2 text-base font-medium text-gray-900 dark:text-white">
              {resource['Course Name']}
            </h3>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
          >
            {resource.Language}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
          >
            {resource.Category}
          </Badge>
        </div>

        <div className="mt-4 flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Source: {resource.Source}
          </span>
          <Link
            href={resource.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
          >
            View <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
