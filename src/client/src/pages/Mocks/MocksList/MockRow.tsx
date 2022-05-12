import { ResponseMock } from '../../../../../types';
import React from 'react';
import { Button, CollapsedRowComponent, ObjectView, TextView } from '../../../components';
import { useWsConnection } from '../../../providers';
import { buildClientMessage } from '../../../../../utils/buildClientMessage';



export const MockRow: CollapsedRowComponent<ResponseMock> = (
    { data: {
        selectorsMap, path, method, template, code,
    } }
) => {
    const { send } = useWsConnection();

    const onDelete = () => send(buildClientMessage(['settings', 'mocks', 'delete'], { path, method }));
    return (
        <div className="margin-0-20">
            <div className="grid-3">
                <div>
                    <TextView label="Path" value={path} />
                    <TextView value={code.toString()} label="Code" />
                    <TextView label="Method" value={method} />

                </div>
                <ObjectView
                    label="Template"
                    value={template}
                />
                <ObjectView
                    label="Variables"
                    value={selectorsMap}
                />
            </div>
            <div className="buttons_wrapper">
                <Button onClick={onDelete} text="Remove" variant="danger" />
            </div>
        </div>
    );
};