import React from 'react';
import { Navigation } from './Navigation';
import { WsIndicator } from './WsIndicator';

export const AppHeader: React.FC = () => (
    <header className="app_header">
        <Navigation />
        <WsIndicator />
    </header>
);