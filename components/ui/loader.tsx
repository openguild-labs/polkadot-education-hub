import type React from 'react';
import { cn } from '@/lib/utils';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Loader({ className, ...props }: LoaderProps) {
  return (
    <div className={cn('flex items-center justify-center', className)} {...props}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-600 border-t-transparent"></div>
    </div>
  );
}
