import React from 'react';
import { Routes } from 'react-router-dom';
import { AppHeader } from './components/AppHeader/AppHeader';

export const AppRouting: React.FC = ({ children }) => (
    <>
        <AppHeader />
        <div className="content">
            <Routes>
                {children}
            </Routes>
        </div>
    </>
);