import React from 'react';
import { LogsList, LogsTest } from './components';

export const LogsPage: React.FC = () => (
    <div className="logs_page">
        <LogsList />
        <LogsTest />
    </div>
);