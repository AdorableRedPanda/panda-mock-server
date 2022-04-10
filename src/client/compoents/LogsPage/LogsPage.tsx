import React from 'react';
import { LogsList } from './components';
import { LogsHeader } from './components/LogsHeader';
import { TestForm } from '../TestForm/TestForm';
import { Method } from '../../../types';

const mocksPort = process.env.APP_MOCKS_PORT;

interface FetchArgs {
    url: string;
    method: Method;
    body: unknown;
}

const makeRequest = ({ url, method, body = null }: FetchArgs) => {
    const init: RequestInit = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors'
    };

    console.log(init);

    if (method !== 'GET') {
        init.body = JSON.stringify(body);
    }

    return fetch(`http://localhost:${mocksPort}/${url}`, init);
};

export const LogsPage: React.FC = () => (
    <div className="logs_page">
        <LogsHeader />
        <TestForm handleSendClick={makeRequest} />
        <LogsList />
    </div>
);