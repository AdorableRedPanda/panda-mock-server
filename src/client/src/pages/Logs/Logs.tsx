import React from 'react';
import { LogsList, TestForm } from './components';
import { PageHeader } from '../../components/PageTitle';
import { useDialog } from '../useDialog';
import { Button } from '../../components';

export const Logs: React.FC = () => {
    const [ref, show, hide] = useDialog();

    return (
        <>
            <PageHeader title="Requests history">
                <Button onClick={show} text="Test" />
            </PageHeader>
            <LogsList />
            <dialog ref={ref}>
                <TestForm onCancel={hide} />
            </dialog>
        </>
    );
};