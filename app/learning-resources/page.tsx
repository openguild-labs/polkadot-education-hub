'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from '@/components/resource-card';
import { learningResources } from '@/constants';

export default function LearningResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'documentation' | 'course' | 'aggregated'>('all');

  // Filter resources based on search query and type
  const filteredResources = learningResources.filter(resource => {
    const matchesSearch = 
      resource['Course Name'].toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.Category.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterType === 'all') return matchesSearch;
    return matchesSearch && resource.Category.toLowerCase() === filterType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Learning Resources
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Curated collection of learning materials to help you master Polkadot development.
              From documentation to interactive courses, find the resources that match your learning style.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search resources..." 
                className="pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Tabs defaultValue={filterType} onValueChange={(value) => setFilterType(value as any)}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
                <TabsTrigger value="course">Courses</TabsTrigger>
                <TabsTrigger value="aggregated">Aggregated</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource['Course Name']}
                description={`${resource.Category} • ${resource.Level} • ${resource.Language}`}
                url={resource.Link}
                badges={[resource.Category, resource.Source]}
                status={resource.Status}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
