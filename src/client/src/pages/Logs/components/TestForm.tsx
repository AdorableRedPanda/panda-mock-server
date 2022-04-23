import React, { useState } from 'react';
import { FetchArgs } from '../fetchRequest';
import { MOCKS_PORT } from '../../../../../constants';
import { TextInput } from '../../../components/TextInput';
import { Button, JsonInput, MethodSelect } from '../../../components';

interface Props {
    handleSendClick: (form: FetchArgs) => void;
}

export const TestForm: React.FC<Props> = ({ handleSendClick }) => {

    const [args, setArgs] = useState<FetchArgs>({ url: '', method: 'GET', body: {} });

    const fieldSetter = <Key extends keyof FetchArgs>(field: Key) => (value: FetchArgs[Key]) => (
        setArgs((prev) => ({ ...prev, [field]: value }))
    );
    
    const onSubmit = () => handleSendClick(args);

    const placeholder = `http://localhost:${MOCKS_PORT}/...`;

    return (
        <form className="request form" >
            <TextInput
                placeholder={placeholder}
                name="url"
                label="Url"
                onChange={fieldSetter('url')}
                value={args.url}
            />
            <MethodSelect
                value={args.method}
                onChange={fieldSetter('method')}
            />
            <JsonInput
                label="Body"
                name="body"
                onChange={fieldSetter('body')}
                value={args.body}
            />
            <div className="submit_wrapper">
                <Button onClick={onSubmit} text="Request" />
            </div>
        </form>
    );
};