import React from 'react';
import { LogsList, LogsHeader, TestForm } from './components';
import { fetchRequest } from './fetchRequest';

export const LogsPage: React.FC = () => (
    <>
        <LogsHeader />
        <TestForm handleSendClick={fetchRequest} />
        <LogsList />
    </>
);