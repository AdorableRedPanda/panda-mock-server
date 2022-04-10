import React from 'react';
import { LabelProps } from './types';

export const InputWrapper:React.FC<LabelProps> = ({ label, name, children }) => (
    <div className="input-wrapper">
        <label className="label" htmlFor={name}>{label}</label>
        {children}
    </div>
);