import { MobileLayoutProps } from '@/utils/definitions';
import React from 'react';
import BottomNavbar from '../BottomNavbar';
import TopNavbar from '../TopNavbar';

const MobileLayout = ({ children, showBottomNavbar = true, showTopNavbar = false }: MobileLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
            {showTopNavbar ? <TopNavbar returnPath='/workouts' /> : null}

            <div className="container mx-auto px-4" style={showTopNavbar ? {marginTop: "40px"} : {}}>
                {children}
            </div>

            {showBottomNavbar ? <BottomNavbar /> : null}
        </div>
    );
};

export default MobileLayout;
