import React from 'react';
import { TextView } from './TextView';

interface Props {
    label: string;
    value: unknown;
}

export const ObjectView: React.FC<Props> = ({ value, label }) => (
    <TextView label={label} value={JSON.stringify(value, null, 4)}/>
);