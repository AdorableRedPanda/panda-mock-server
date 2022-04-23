import { InputProps } from './types';
import React, { useEffect, useState } from 'react';
import { TextareaInput } from './TextareaInput';

type Props = InputProps<object>;

export const JsonInput: React.FC<Props> = ({ label, name, onChange, value }) => {

    const [str, setStr] = useState(JSON.stringify(value));

    // todo: add parsing debounce
    // todo: add props change listening

    useEffect(() => {
        try {
            onChange(JSON.parse(str));
        } catch {}
    }, [str]);

    return (
        <TextareaInput
            label={`${label} (JSON)`}
            name={name}
            onChange={setStr}
            value={str}
        />
    );
};