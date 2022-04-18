import React, { useState } from 'react';
import { Button, JsonInput, MethodSelect, TextareaInput } from '../atoms';
import { Method } from '../../../types';
import { TextInput } from '../atoms/TextInput';
import { useStore, useWsSend } from '../StoreProvider';

export const MocksPage: React.FC = () => {

    const { mocks } = useStore();
    console.log(mocks);

    const [method, setMethod] = useState<Method>('GET');
    const [resp, setResp] = useState<object>({});
    const [path, setPath] = useState('');
    const [variables, setVars] = useState('');

    const send = useWsSend();

    const onClick = () => send('mock_update', { method, resp, path, variables });

    return (
        <div className="mocks_page">
            <div className="title">
                <h2>Registered request mocks</h2>
            </div>
            <form className="mock form">
                <TextInput
                    onChange={setPath}
                    value={path}
                    label="Path"
                    name="path"
                />
                <MethodSelect onChange={setMethod} value={method} />
                <TextareaInput onChange={setVars} value={variables} label="Variables" name="variables" />
                <JsonInput
                    label="Response"
                    name="res"
                    onChange={setResp}
                    value={resp}
                />
                <div className="submit_wrapper">
                    <Button onClick={onClick} text="mock" />
                </div>
            </form>
        </div>
    );
};