import React from 'react';
import { Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';

export const AppRouting: React.FC = ({ children }) => (
    <>
        <Navigation />
        <div className="content">
            <Routes>
                {children}
            </Routes>
        </div>
    </>
);