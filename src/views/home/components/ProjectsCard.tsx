'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ProjectsProps } from '@/types/projects';

interface ProjectsCardProps {
  project: ProjectsProps;
}

export default function ProjectsCard({ project }: ProjectsCardProps) {
  const { title, description, image, date } = project;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`h-64 w-60 flex-shrink-0 snap-center overflow-hidden rounded-xl bg-light-100 shadow-md duration-700 dark:bg-dark-100 ${isLoading ? 'animate-pulse blur-sm' : 'group'}`}
    >
      <div className="h-28 w-full shadow-sm">
        <Image
          src={
            image ??
            'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80'
          }
          alt="image"
          width={320}
          height={160}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className={`h-full w-full object-cover duration-700 ${isLoading ? 'scale-[1.02]' : ''}`}
        />
      </div>
      <div className="flex h-32 flex-col justify-between px-4 pt-4">
        <div className="h-32 w-full">
          <h2 className="text-md mb-2 truncate text-nowrap font-poppins font-bold text-neutral-800 dark:text-neutral-200">
            {title ?? 'Project Title'}
          </h2>
          <p className="line-clamp-3 truncate text-wrap font-poppins text-sm text-neutral-600 dark:text-neutral-400">
            {description ?? 'Project Description'}
          </p>
        </div>
        <span className="text-[10px] text-neutral-800 dark:text-neutral-200">
          {date ?? 'Dec 05, 2023'}
        </span>
      </div>
    </div>
  );
}
