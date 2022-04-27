import { Path } from 'red-panda-utils';
import React from 'react';

interface Props {
    name: string;
    path: Path;
}
export const VariableView: React.FC<Props> = ({ name, path }) => (
    <div className="variable-component">
        <div className="name">{name}</div>
        <div className="path">{`[ ${path.join(', ')} ]`}</div>
    </div>
);