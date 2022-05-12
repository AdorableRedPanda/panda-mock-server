import React from 'react';
import { Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

export const AppRouting: React.FC = ({ children }) => (
    <div className="app_layout">
        <Sidebar />
        <div className="app_content">
            <Routes>
                {children}
            </Routes>
        </div>
    </div>
);