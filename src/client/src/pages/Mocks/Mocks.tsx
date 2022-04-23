import React from 'react';
import { MocksList } from './MocksList';
import { ResponseMock } from '../../../../types';
import { MockForm } from './MockForm';
import { PageHeader } from '../../components/PageTitle';
import { useWsConnection } from '../../containers';
import { Button } from '../../components';
import { useDialog } from '../useDialog';


export const Mocks: React.FC = () => {
    const { send } = useWsConnection();
    const onSubmit = (mock: ResponseMock) => send('mock_upsert', mock);

    const [ref, show, hide] = useDialog();

    return (
        <>
            <PageHeader title="Registered request mocks" >
                <Button onClick={show} text="Add" />
            </PageHeader>
            <MocksList />
            <dialog ref={ref} id="form">
                <MockForm onCancel={hide} onSubmit={onSubmit} />
            </dialog>
        </>
    );
};