import React, { useState } from 'react';
import { Method, RequestMock } from '../../../types';
import { TextInput } from '../atoms/TextInput';
import { Button, JsonInput, MethodSelect } from '../atoms';

interface Props {
    onSubmit: (mock: RequestMock) => void;
}

export const MockForm: React.FC<Props> = ({ onSubmit }) => {
    const [method, setMethod] = useState<Method>('GET');
    const [response, setResp] = useState<object>({});
    const [path, setPath] = useState('');

    const onClick = () => onSubmit({ method, path: `/${path}`, pattern: JSON.stringify(response) });

    return (
        <form className="mock form">
            <TextInput
                onChange={setPath}
                value={path}
                label="Path"
                name="path"
            />
            <MethodSelect onChange={setMethod} value={method} />
            <JsonInput
                label="Response"
                name="response"
                onChange={setResp}
                value={response}
            />
            <div className="submit_wrapper">
                <Button onClick={onClick} text="mock it" />
            </div>
        </form>
    );
};