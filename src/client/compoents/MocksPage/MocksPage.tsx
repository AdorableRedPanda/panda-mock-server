import React from 'react';
import { useWsConnection } from '../StoreProvider';
import { MockForm } from './MockForm';
import { MocksList } from './MocksList';
import { RequestMock } from '../../../types';

export const MocksPage: React.FC = () => {

    const { send } = useWsConnection();

    const onSubmit = (mock: RequestMock) => send('mock_upsert', mock);

    return (
        <div className="mocks_page">
            <div className="title">
                <h2>Registered request mocks</h2>
            </div>
            <MockForm onSubmit={onSubmit} />
            <MocksList />
        </div>
    );
};