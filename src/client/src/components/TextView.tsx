import React from 'react';
import { InputWrapper } from './InputWrapper';

interface Props {
    label: string;
    value: string;
}

export const TextView: React.FC<Props> = ({ label, value }) => (
    <InputWrapper name={label} label={label}>
        <div className="input white-space-normal">
            {value}
        </div>
    </InputWrapper>
);
