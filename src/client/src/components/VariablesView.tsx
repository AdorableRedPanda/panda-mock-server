import React from 'react';
import { InputWrapper } from './InputWrapper';
import { SelectorsMap } from '../../../types/SelectorsMap';
import { Path } from 'red-panda-utils';

interface Props {
    label: string;
    value: SelectorsMap;
}

const stringifyVar = (name: string, path: Path) => `${name}: [${path.join(', ')}]`;

export const VariablesView: React.FC<Props> = ({ value, label }) => (
    <InputWrapper name={label} label={label}>
        <pre className="input overflow-auto margin-0">
            {
                Object
                    .entries(value)
                    .map(([key, path]) => stringifyVar(key, path))
                    .join('\n')
            }
        </pre>
    </InputWrapper>
);