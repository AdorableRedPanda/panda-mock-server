import React from 'react';
import { SelectorsMap } from '../../../types/SelectorsMap';
import { Details } from './Details';
import { VariableView } from './VariableView';

interface Props {
    map: SelectorsMap;
}

export const VariablesComponent: React.FC<Props> = ({ map }) => {
    const entries = Object.entries(map);
    return (
        <Details summary={entries.map(([key]) => key).join(', ')}>
            {entries.map(([key, path]) => <VariableView name={key} path={path} key={key} />)}
        </Details>
    );
};