import { Details } from './Details';
import React from 'react';

interface Props {
    obj: unknown;
}

export const ObjectView: React.FC<Props> = ({ obj }) => {
    const str = JSON.stringify(obj, null, 2);

    return (
        <Details summary={str}>
            <pre className="overflow-auto margin-0">{str}</pre>
        </Details>
    );
};