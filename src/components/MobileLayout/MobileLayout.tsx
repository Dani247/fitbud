import { MobileLayoutProps } from '@/utils/definitions';
import React from 'react';
import BottomNavbar from '../BottomNavbar';

const MobileLayout = ({ children }: MobileLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {children}
            </div>
            <BottomNavbar />
        </div>
    );
};

export default MobileLayout;
