import React, { useEffect, useState } from 'react';
import { Method } from '../../../types';
import { TextArea, TextInput, Select, Button } from '../atoms';


interface FetchArgs {
    url: string;
    method: Method;
    body: unknown;
}

interface Props {
    handleSendClick: (form: FetchArgs) => void;
}

export const TestForm: React.FC<Props> = ({ handleSendClick }) => {

    const [args, setArgs] = useState<FetchArgs>({ url: '', method: 'GET', body: null });

    const [bodyStr, setStrBody] = useState('');

    const setBodyArg = (body: unknown) => setArgs((prev) => ({ ...prev, body }));

    const onUrlChange = (url: string) => setArgs((prev) => ({ ...prev, url }));
    const onMethodChange = (method: Method) => setArgs((prev) => ({ ...prev, method }));

    useEffect(() => {
        try { setBodyArg(JSON.parse(bodyStr)); } catch {
            setBodyArg({});
        }
    }, [bodyStr]);

    const options: Method[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

    const onSubmit = () => handleSendClick(args);

    return (
        <form className="test_request_form" >
            <TextInput
                name="url"
                label="Url"
                onChange={onUrlChange}
                value={args.url}
            />
            <Select options={options} value={args.method} onChange={onMethodChange} label="Method" name="method" />
            <TextArea label="Body" name="body" onChange={setStrBody} value={bodyStr} />
            <div className="submit_wrapper">
                <Button onClick={onSubmit} text="Request" />
            </div>
        </form>
    );
};