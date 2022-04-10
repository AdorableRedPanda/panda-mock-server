import React, { BaseSyntheticEvent, useCallback } from 'react';
import { InputProps } from './types';
import { InputWrapper } from './InputWrapper';

export const TextArea: React.FC<InputProps> = ({ value, onChange, label, name }) => {
    const onEvent = useCallback((ev: BaseSyntheticEvent) => onChange(ev.target.value), [onChange]);
    return (
        <InputWrapper name={name} label={label}>
            <textarea
                className="input height-39"
                name={name}
                onChange={onEvent}
                value={value}
            />
        </InputWrapper>
    );
};