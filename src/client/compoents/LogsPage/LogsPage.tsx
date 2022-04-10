import React from 'react';
import { LogsList, LogsHeader, TestForm } from './components';
import { fetchRequest } from './fetchRequest';

export const LogsPage: React.FC = () => (
    <div className="logs_page">
        <LogsHeader />
        <TestForm handleSendClick={fetchRequest} />
        <LogsList />
    </div>
);