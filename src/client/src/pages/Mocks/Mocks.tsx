import React from 'react';
import { MocksList } from './MocksList';
import { ResponseMock } from '../../../../types';
import { MockForm } from './MockForm';
import { PageHeader } from '../../components/PageTitle';
import { useWsConnection } from '../../containers';


export const Mocks: React.FC = () => {
    const { send } = useWsConnection();
    const onSubmit = (mock: ResponseMock) => send('mock_upsert', mock);

    return (
        <>
            <PageHeader title="Registered request mocks" />
            <MockForm onSubmit={onSubmit} />
            <MocksList />
        </>
    );
};