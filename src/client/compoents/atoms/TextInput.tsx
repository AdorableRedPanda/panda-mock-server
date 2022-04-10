import React, { BaseSyntheticEvent, useCallback } from 'react';
import { InputProps } from './types';
import { InputWrapper } from './InputWrapper';

export const TextInput: React.FC<InputProps> = ({ value, onChange, label, name }) => {
    const onEvent = useCallback((ev: BaseSyntheticEvent) => onChange(ev.target.value), [onChange]);
    return (
        <InputWrapper name={name} label={label}>
            <input
                className="input"
                name={name}
                type="text"
                onChange={onEvent}
                value={value}
            />
        </InputWrapper>
    );
};