import React from 'react';
import { RequestLog } from '../../../../../types';
import { Cell } from './Cell';

interface Props {
    item: RequestLog;
}

export const Log: React.FC<Props> = ({ item }) => {
    const { timestamp, method, path, body, queryParams, response } = item;

    const params = queryParams.map(([key, value]) => <span key={key} className="params_item">{`${key}=${value}`}</span>);

    return (
        <tr>
            <Cell children={timestamp}/>
            <Cell children={method.toUpperCase()}/>
            <Cell children={path}/>
            <Cell className="params" children={params}/>
            <Cell children={JSON.stringify(body)}/>
            <Cell children={JSON.stringify(response)}/>
        </tr>
    );
};

