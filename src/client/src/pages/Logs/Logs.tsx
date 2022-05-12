import React from 'react';
import { LogsList, TestForm } from './components';
import { PageHeader } from '../../components/PageTitle';
import { useDialog } from '../useDialog';
import { Button } from '../../components';

export const Logs: React.FC = () => {
    const [ref, show, hide] = useDialog();

    return (
        <div className="page_layout">
            <PageHeader title="Requests history">
                <Button onClick={show} text="Test" />
            </PageHeader>
            <div className="page_content">
                <LogsList />
            </div>
            <dialog ref={ref}>
                <TestForm onCancel={hide} />
            </dialog>
        </div>
    );
};