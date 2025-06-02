'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

type OpenGraphData = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

type ResourceCardProps = {
  title: string;
  description: string;
  url: string;
  img?: string;
  badges?: string[];
  status?: string;
};

const fetchOpenGraph = async (url: string): Promise<OpenGraphData> => {
  try {
    const response = await fetch(`/api/opengraph?url=${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error('Failed to fetch OpenGraph data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching OpenGraph data:', error);
    return {};
  }
};

export default function ResourceCard({
  title,
  description,
  url,
  img,
  badges = [],
  status,
}: ResourceCardProps) {
  const [ogData, setOgData] = useState<OpenGraphData>({});

  useEffect(() => {
    if (!img) {
      fetchOpenGraph(url).then(setOgData);
    }
  }, [url, img]);

  const imageUrl = img || ogData.image;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-100/50 dark:bg-gray-800 dark:hover:shadow-pink-900/10">
      <CardContent className="p-6">
        {/* {imageUrl && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={200}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )} */}
        <div className="mb-2 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
            >
              {badge}
            </Badge>
          ))}
          {status && (
            <Badge
              variant="outline"
              className="border-green-200 bg-green-50 text-green-800 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-300"
            >
              {status}
            </Badge>
          )}
        </div>
        <h3 className="mb-2 line-clamp-2 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">{description}</p>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-pink-600 transition-colors hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
        >
          View Resource <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  );
}
