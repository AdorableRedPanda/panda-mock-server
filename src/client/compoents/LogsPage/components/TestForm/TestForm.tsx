import React, { useEffect, useState } from 'react';
import { Button, Select, TextArea, TextInput } from '../../../atoms';
import { Method } from '../../../../../types';
import { REST_METHODS } from '../../../../../constants';
import { FetchArgs } from '../../fetchRequest';

interface Props {
    handleSendClick: (form: FetchArgs) => void;
}

export const TestForm: React.FC<Props> = ({ handleSendClick }) => {

    const [args, setArgs] = useState<FetchArgs>({ url: '', method: 'GET', body: {} });

    const [bodyStr, setStrBody] = useState('');

    const setBodyArg = (body: unknown) => setArgs((prev) => ({ ...prev, body }));

    const onUrlChange = (url: string) => setArgs((prev) => ({ ...prev, url }));
    const onMethodChange = (method: Method) => setArgs((prev) => ({ ...prev, method }));

    useEffect(() => {
        try {
            setBodyArg(JSON.parse(bodyStr));
        } catch {}
    }, [bodyStr]);

    const onSubmit = () => handleSendClick(args);

    return (
        <form className="test_request_form" >
            <TextInput
                name="url"
                label="Url"
                onChange={onUrlChange}
                value={args.url}
            />
            <Select options={REST_METHODS} value={args.method} onChange={onMethodChange} label="Method" name="method" />
            <TextArea label="Body (JSON)" name="body" onChange={setStrBody} value={bodyStr} />
            <div className="submit_wrapper">
                <Button onClick={onSubmit} text="Request" />
            </div>
        </form>
    );
};