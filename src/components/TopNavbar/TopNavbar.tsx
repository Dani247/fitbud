'use client';
import Link from 'next/link';
import React from 'react';

// const activeClasses = "bg-blue-500 text-white shadow-md";
// const inactiveClasses = "text-gray-700 hover:bg-gray-100";

const TopNavbar = ({ returnPath }: { returnPath: string }) => {
    return (
        <div className="fixed inset-x-0 top-0 bg-gray-200 border-t-2 border-gray-300">
            <div className="flex justify-between max-w-md mx-auto">
                <Link href={returnPath} className={`flex items-center p-2 rounded-lg`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <div>Return</div>
                </Link>
            </div>
        </div>
    );
};

export default TopNavbar;
