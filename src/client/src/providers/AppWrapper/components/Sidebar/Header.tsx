import React from 'react';
import { WsIndicator } from './WsIndicator';

export const Header: React.FC = () => (
    <header className="app_header">
        <a target="_blank" href="https://github.com/AdorableRedPanda/panda-mock-server"><h1>Panda mock server</h1></a>
        <WsIndicator />
    </header>
);