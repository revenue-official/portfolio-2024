import { createContext } from 'react';

const SidebarContext = createContext<boolean | null>(null);

export default SidebarContext;