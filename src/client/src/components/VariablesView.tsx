import React from 'react';
import { SelectorsMap } from '../../../types/SelectorsMap';
import { Path } from 'red-panda-utils';
import { TextView } from './TextView';

interface Props {
    label: string;
    value: SelectorsMap;
}

const stringifyVar = (name: string, path: Path) => `${name}: [${path.join(', ')}]`;

export const VariablesView: React.FC<Props> = ({ value, label }) => {
    const vars = Object
        .entries(value)
        .map(([key, path]) => stringifyVar(key, path))
        .join('\n');

    return <TextView label={label} value={vars}/>;
};