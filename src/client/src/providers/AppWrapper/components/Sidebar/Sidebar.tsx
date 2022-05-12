import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';

export const Sidebar: React.FC = () => (
    <aside className="app_sidebar">
        <Header />
        <Navigation />
    </aside>
);