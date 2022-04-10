import React, { useState } from 'react';
import { Button, JsonInput, MethodSelect } from '../../../atoms';
import { FetchArgs } from '../../fetchRequest';
import { TextInput } from '../../../atoms/TextInput';

interface Props {
    handleSendClick: (form: FetchArgs) => void;
}

export const TestForm: React.FC<Props> = ({ handleSendClick }) => {

    const [args, setArgs] = useState<FetchArgs>({ url: '', method: 'GET', body: {} });

    const fieldSetter = <Key extends keyof FetchArgs>(field: Key) => (value: FetchArgs[Key]) => (
        setArgs((prev) => ({ ...prev, [field]: value }))
    );
    
    const onSubmit = () => handleSendClick(args);

    return (
        <form className="request form" >
            <TextInput
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