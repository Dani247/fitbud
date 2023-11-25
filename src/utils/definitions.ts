import React, { ReactNode } from "react";

export interface Set {
    setid: string;
    weight: string;
    reps: string;
    notes: string;
}

export interface Exercise {
    exerciseid: string;
    exercisename: string;
    sets: Set[];
}

export interface Workout {
    workoutid: string;
    workoutname: string;
    date: string; // or Date, if you are converting the string to a Date object
    exercises: Exercise[];
}

export type Workouts = Workout[];

export interface MobileLayoutProps {
    children: ReactNode;
}

// Define button type-to-style mapping
export const buttonStyles = {
    default: "bg-gray-200 text-gray-700",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    none: ""
};

export interface MaterialButtonProps {
    children: ReactNode;
    type?: keyof typeof buttonStyles;
    onClick?: () => void;
    className?: string
}

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    containerClassName?: string;
    title?: string;
}

