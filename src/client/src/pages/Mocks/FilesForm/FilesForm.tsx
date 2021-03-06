import React from 'react';
import { useSettings, useWsConnection } from '../../../providers';
import { buildClientMessage } from '../../../../../utils/buildClientMessage';
import { FileComponent } from './FileComponent';
import { Func } from '../../../../../types';
import { Button } from '../../../components';
import { SaveForm } from './SaveForm';

interface Props {
    hideDialog: Func;
}

export const FilesForm: React.FC<Props> = ({ hideDialog }) => {
    const { files } = useSettings();
    const { send } = useWsConnection();

    const removeFile = (filename: string) => send(buildClientMessage(['settings', 'files', 'delete'], filename));
    const activateFile = (filename: string) => send(buildClientMessage(['settings', 'mocks_from_file'], filename));
    const saveFile = (filename: string) => send(buildClientMessage(['settings', 'files', 'create'], filename));

    return (
        <div className="files-dialog form">
            <ul className="files_list">
                {files.map((file) => <FileComponent filename={file} activateCb={activateFile} removeCb={removeFile} key={file} />)}
            </ul>
            <SaveForm saveMocksState={saveFile} />
            <div className="buttons_wrapper">
                <Button onClick={hideDialog} text="Close" variant="secondary"/>
            </div>
        </div>
    );
};