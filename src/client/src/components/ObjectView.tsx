import React from 'react';
import { InputWrapper } from './InputWrapper';

interface Props {
    label: string;
    value: unknown;
}

export const ObjectView: React.FC<Props> = ({ value, label }) => (
    <InputWrapper name={label} label={label}>
        <pre className="input overflow-auto margin-0">{JSON.stringify(value, null, 2)}</pre>
    </InputWrapper>
);