import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import SectionHeader from '@/components/section-header';
import { researchArticles } from '@/constants';

export default function ResearchSection() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Research Articles"
        description="Explore in-depth research articles on Polkadot architecture, consensus mechanisms, and other technical topics."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchArticles.map((article, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-md dark:hover:shadow-pink-900/10"
          >
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              {article.img ? (
                <Image
                  src={article.img || '/placeholder.svg'}
                  alt={article.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="line-clamp-2 text-lg font-medium text-gray-900 dark:text-white">
                {article.title}
              </h3>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4 p-4 pt-0">
              <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                {article.description}
              </p>
              <Link
                href={
                  article.url.startsWith('http')
                    ? article.url
                    : `https://x.com/openguildwtf/status/${article.url}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
              >
                Read Article <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
