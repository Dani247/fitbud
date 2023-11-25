'use client'
// components/Modal.jsx
import { ModalProps } from '@/utils/definitions';
import React from 'react';
import Button from '../Button';

const Modal = ({ children, isOpen, onClose, containerClassName, title }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className={`bg-white p-4 rounded shadow-lg ${containerClassName || ''}`}>
                <div className='mb-2 w-full flex justify-between items-center'>
                    <h2 className="font-bold text-xl">{title}</h2>

                    <Button onClick={onClose} type='none'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>
                
                <hr />

                {children}
            </div>
        </div>
    );
};

export default Modal;
