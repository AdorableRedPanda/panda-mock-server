import React, { BaseSyntheticEvent, useCallback } from 'react';
import { SelectProps } from './types';
import { InputWrapper } from './InputWrapper';

export const Select: React.FC<SelectProps> = ({ value, onChange, label, name, options }) => {
    const onEvent = useCallback((ev: BaseSyntheticEvent) => onChange(ev.target.value), [onChange]);
    return (
        <InputWrapper name={name} label={label}>
            <select className="input" onChange={onEvent} value={value}>
                {options.map(op => <option key={op} value={op}>{op}</option>)}
            </select>
        </InputWrapper>
    );
};