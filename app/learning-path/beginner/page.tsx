import { learningResources } from '@/constants';
import { LearningResourceCard } from '@/components/learning-resource-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BeginnerResourcesPage() {
  const beginnerResources = learningResources.filter(
    resource => resource.Level === 'Beginner' || resource.Level === 'Beginner/Intermediate'
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <Button variant="ghost" className="mb-6 -ml-2" asChild>
              <Link href="/learning-path" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Learning Path
              </Link>
            </Button>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Beginner Resources
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Start your Polkadot journey with these beginner-friendly resources. Learn the
              fundamentals of blockchain, Rust programming, and get introduced to Substrate.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {beginnerResources.map((resource, index) => (
                <LearningResourceCard key={index} resource={resource} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
