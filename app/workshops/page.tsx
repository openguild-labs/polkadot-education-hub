'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from '@/components/resource-card';
import { workshops } from '@/constants';
import { HeroLayout } from '@/components/hero';

type OpenGraphData = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
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

export default function WorkshopsPage() {
  // Group workshops by category
  const technicalWorkshops = workshops.filter(
    w =>
      w.title.includes('Technical') ||
      w.title.includes('Substrate') ||
      w.title.includes('Rust') ||
      w.title.includes('ink!')
  );

  const communityWorkshops = workshops.filter(
    w => w.title.includes('Community') || w.title.includes('Call')
  );

  const conceptualWorkshops = workshops.filter(
    w => !technicalWorkshops.includes(w) && !communityWorkshops.includes(w)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <HeroLayout
        title="Polkadot Workshops"
        subtitle="Hands-on workshop materials to help you learn by doing. These workshops cover a wide range of topics from basic Substrate concepts to advanced Polkadot features."
      />

      {/* Featured Workshop */}
      <section className="bg-white py-12 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 shadow-xl dark:from-pink-950/30 dark:to-purple-950/30">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <Badge className="mb-4 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
                  Featured Workshop
                </Badge>
                <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  Introduction to Polkadot SDK - Substrate
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Framework to build blockchain with ease. This comprehensive workshop will guide
                  you through the fundamentals of Substrate and help you get started with blockchain
                  development on Polkadot.
                </p>
                <div className="mb-6 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Last updated: May 2025
                    </span>
                  </div>
                </div>
                <Button className="rounded-full bg-pink-600 hover:bg-pink-500 hover:shadow-md hover:shadow-pink-200 dark:hover:shadow-pink-900/20">
                  <Link
                    href={workshops[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Workshop <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mx-auto">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                Workshop Library
              </h2>
              <TabsList>
                <TabsTrigger value="all">All Workshops</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="conceptual">Conceptual</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technicalWorkshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {communityWorkshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="conceptual" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {conceptualWorkshops.map((workshop, index) => (
                  <WorkshopCard key={index} workshop={workshop} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16"
        style={{ backgroundImage: 'url(/images/backgrounds/gradient-bg-2.png)' }}
      >
        <div className="container mx-auto px-4 bg-white rounded-3xl py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Want a More Structured Learning Experience?
            </h2>
            <p className="mt-4 text-lg text-black/80">
              Join our bootcamp for a comprehensive curriculum with expert guidance and hands-on
              projects.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-pink-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-white/20"
              >
                <Link href="/bootcamp">Join Bootcamp</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkshopCard({ workshop }: { workshop: any }) {
  const badges = [
    workshop.title.includes('Substrate')
      ? 'Substrate'
      : workshop.title.includes('Rust')
        ? 'Rust'
        : workshop.title.includes('ink!')
          ? 'ink!'
          : workshop.title.includes('Community')
            ? 'Community'
            : 'Workshop',
  ];

  return (
    <ResourceCard
      title={workshop.title}
      description={workshop.description}
      url={workshop.url}
      img={workshop.img}
      badges={badges}
      status={workshop.released !== false ? 'Available' : undefined}
    />
  );
}
