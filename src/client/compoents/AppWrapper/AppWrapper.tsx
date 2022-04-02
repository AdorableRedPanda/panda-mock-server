import React from 'react';
import { Navigation } from './components/Navigation';

export const AppWrapper: React.FC = ({ children }) => (
    <>
        <Navigation />
        <div className="content">{children}</div>
    </>
);