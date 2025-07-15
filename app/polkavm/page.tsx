'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from '@/components/resource-card';
import { polkaVMResources } from '@/constants';
import { HeroLayout } from '@/components/hero';
import Image from 'next/image';

export default function PolkaVMResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<
    | 'all'
    | 'documentation'
    | 'tutorial'
    | 'repository'
    | 'article'
    | 'community'
    | 'case-study'
    | 'proposal'
  >('all');

  // Filter resources based on search query and type
  const filteredResources = polkaVMResources.filter(resource => {
    const matchesSearch =
      resource['Course Name'].toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.Category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.Source.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterType === 'all') return matchesSearch;

    // Direct category matching
    return matchesSearch && resource.Category.toLowerCase() === filterType.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <HeroLayout
        title="PolkaVM Resources"
        subtitle="Explore resources for PolkaVM - a fast and secure RISC-V based virtual machine for the Polkadot ecosystem"
        primaryButton={{
          text: 'Official Documentation',
          href: 'https://docs.polkadot.com/develop/smart-contracts/',
        }}
        secondaryButton={{
          text: 'GitHub Repository',
          href: 'https://github.com/paritytech/polkavm',
        }}
      />

      {/* Introduction Section */}
      <div className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">What is PolkaVM?</h2>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              PolkaVM is a fast and secure RISC-V based virtual machine designed specifically for
              the Polkadot ecosystem. It enables developers to write smart contracts in various
              languages including Rust and Solidity, offering high performance and security for
              decentralized applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Whether you're building a DeFi application, NFT marketplace, or any other
              decentralized solution on Polkadot, PolkaVM provides the tools and infrastructure
              needed for efficient smart contract development.
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
                placeholder="Search PolkaVM resources..."
                className="pl-10"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <Tabs defaultValue={filterType} onValueChange={value => setFilterType(value as any)}>
              <TabsList className="flex flex-wrap gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
                <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
                <TabsTrigger value="repository">Repositories</TabsTrigger>
                <TabsTrigger value="article">Articles</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="case-study">Case Studies</TabsTrigger>
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
                description={
                  resource.Description ||
                  `${resource.Category} • ${resource.Level} • ${resource.Language}`
                }
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
