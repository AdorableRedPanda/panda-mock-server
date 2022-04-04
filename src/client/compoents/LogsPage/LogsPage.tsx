import React from 'react';
import { LogsList } from './components';

export const LogsPage: React.FC = () => (
    <div className="logs_page">
        <div className="title">
            <h2>Mock server requests</h2>
            <button>test</button>
        </div>

        <LogsList />
    </div>
);