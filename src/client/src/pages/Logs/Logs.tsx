import React from 'react';
import { LogsList, TestForm } from './components';
import { fetchRequest } from './fetchRequest';
import { PageHeader } from '../../components/PageTitle';

export const Logs: React.FC = () => (
    <>
        <PageHeader title="Requests history" />
        <TestForm handleSendClick={fetchRequest} />
        <LogsList />
    </>
);