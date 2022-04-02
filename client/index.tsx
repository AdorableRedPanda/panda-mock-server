import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './compoents/App';
import './styles/index.scss';

const element = document.getElementById('root');
if (!!element) {
    const root = createRoot(element);
    root.render(<App />);
}

