import React, { useState } from 'react';
import { Button, JsonInput, MethodSelect } from '../../../../components';
import { TextInput } from '../../../../components/TextInput';
import { MOCKS_PORT } from '../../../../../../constants';
import { FetchArgs, fetchRequest } from './fetchRequest';
import { Func } from '../../../../../../types';

interface Props {
    onCancel: Func;
}

export const TestForm: React.FC<Props> = ({ onCancel }) => {
    const [args, setArgs] = useState<FetchArgs>({ url: '', method: 'GET', body: {} });

    const fieldSetter = <Key extends keyof FetchArgs>(field: Key) => (value: FetchArgs[Key]) => (
        setArgs((prev) => ({ ...prev, [field]: value }))
    );
    
    const onSubmit = () => fetchRequest(args);

    const placeholder = `http://localhost:${MOCKS_PORT}/...`;

    return (
        <form className="form test_form">
            <div className="path_method">
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
            </div>
            <JsonInput
                label="Body"
                name="body"
                onChange={fieldSetter('body')}
                value={args.body}
            />
            <div className="buttons_wrapper">
                <Button onClick={onCancel} text="Cancel" variant="secondary" />
                <Button onClick={onSubmit} text="Request" />
            </div>
        </form>
    );
};