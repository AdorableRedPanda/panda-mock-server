import React from 'react';
import { MocksList } from './MocksList';
import { ResponseMock } from '../../../../types';
import { MockForm } from './MockForm';
import { PageHeader } from '../../components/PageTitle';
import { Button } from '../../components';
import { useDialog } from '../useDialog';
import { useWsConnection } from '../../providers';
import { buildClientMessage } from '../../../../utils/buildClientMessage';
import { FilesForm } from './FilesForm';


export const Mocks: React.FC = () => {
    const { send } = useWsConnection();
    const onSubmit = (mock: ResponseMock) => send(buildClientMessage(['settings', 'mocks', 'upsert'], mock));

    const [formRef, showForm, hideForm] = useDialog();
    const [listRef, showFileList, hideFileList] = useDialog();

    return (
        <div className="page_layout">
            <PageHeader title="Registered request mocks" >
                <Button onClick={showForm} text="Add" />
                <Button onClick={showFileList} text="Files" variant="secondary" />
            </PageHeader>
            <div className="page_content">
                <MocksList />
            </div>
            <dialog ref={formRef} id="mock-form">
                <MockForm onCancel={hideForm} onSubmit={onSubmit} />
            </dialog>
            <dialog ref={listRef} id="files-list">
                <FilesForm hideDialog={hideFileList} />
            </dialog>
        </div>
    );
};