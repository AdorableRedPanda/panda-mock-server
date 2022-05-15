import React from 'react';
import { Button, JsonInput, MethodSelect } from '../../../components';
import { Func, ResponseMockDto } from '../../../../../types';
import { TextInput } from '../../../components/TextInput';
import { useMockState } from './useMockState';

interface Props {
    onSubmit: Func<ResponseMockDto>;
    onCancel: Func;
}

export const MockForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
    const [state, setter] = useMockState();

    const onClick = () => onSubmit(state);

    const { path, method, code, selectorsMap, template } = state;

    const onVarsChange = (obj: object) => setter('selectorsMap')(
            Object
                .fromEntries(
                    Object.entries(obj)
                        .filter(([, value]) => Array.isArray(value))
                )
        );

    const onCodeChange = (str: string) => {
        const parsed = Number.parseInt(str);
        if (!Number.isNaN(parsed)) {
            setter('code')(parsed);
        }
    };

    return (
        <form className="form mock_form">
            <div className="text-inputs">
                <TextInput
                    onChange={setter('path')}
                    value={path}
                    label="Path"
                    name="path"
                />
                <TextInput
                    onChange={onCodeChange}
                    value={code.toString()}
                    label="Code"
                    name="path"
                />
                <MethodSelect onChange={setter('method')} value={method} />
            </div>
            <div className="text-areas">
                <JsonInput
                    label="Template"
                    name="template"
                    onChange={setter('template')}
                    value={template}
                />
                <JsonInput
                    label="Variables"
                    name="variables"
                    onChange={onVarsChange}
                    value={selectorsMap}
                />
            </div>
            <div className="buttons_wrapper">
                <Button onClick={onCancel} text="Cancel" variant="secondary" />
                <Button onClick={onClick} text="Create" />
            </div>
        </form>
    );
};