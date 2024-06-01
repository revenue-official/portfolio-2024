'use client';

import Breakline from '@/components/Elements/Breakline';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import useSidebarStore from '@/contexts/SidebarProvider';
import SideOverview from './SideOverview';
import SideAccount from './SideAccount';
import SideProfile from './SideProfile';
import SideHeader from './SideHeader';
import SideToggle from './SideToggle';

export default function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);
  const [firstOpenDuration, setFirstOpenDuration] = useState('duration-500 md:left-0');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const setTimeoutPromise = (delay: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  };

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
      const runTimeouts = async () => {
        await setTimeoutPromise(3000);
        setFirstOpenDuration('duration-500 -left-2');
        setIsOpen(true);
        await setTimeoutPromise(600);
        setFirstOpenDuration('duration-500 left-0');
        setIsOpen(false);
        await setTimeoutPromise(500);
        setFirstOpenDuration('duration-300');
      };
      runTimeouts();
    } else {
      setIsOpen(true);
    }
  }, [isMobile, setIsOpen]);

  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <aside
      className={`absolute z-10 h-screen pr-5 md:relative ${isOpen ? 'left-0' : '-left-16'} ${firstOpenDuration}`}
    >
      <div className="flex h-full w-16 flex-col justify-around bg-light-100 px-0 shadow-md shadow-neutral-300 duration-300 dark:bg-dark-100 dark:shadow-neutral-800 md:w-64 md:px-4">
        {/* sidebar toggle  */}
        <SideToggle toggleSidebar={toggleSidebar} isOpen={isOpen} />
        {/* mini side */}
        <div className="flex h-full w-full flex-col">
          {/* Product Logo  */}
          <SideHeader />
          {/* BreakLine  */}
          <Breakline className="my-2" />
          {/* Overview  */}
          <SideOverview />
          {/* Account  */}
          <SideAccount />
        </div>
        {/* BreakLine  */}
        <Breakline className="my-1" />
        {/* profile */}
        <SideProfile />
      </div>
    </aside>
  );
}
