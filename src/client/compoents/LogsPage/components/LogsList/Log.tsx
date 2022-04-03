import React from 'react';
import { RequestLog } from '../../../../../types';

interface Props {
    item: RequestLog;
}

const Cell: React.FC = ({ children }) => (
    <td className="cell">
        {children}
    </td>
);

export const Log: React.FC<Props> = ({ item }) => {
    const params = item.queryParams.map(([key, value]) => `${key}:${value}`).join(', ');
    return (
        <tr className="row">
            <Cell children={item.timestamp}/>
            <Cell children={item.method.toUpperCase()}/>
            <Cell children={item.response.code}/>
            <Cell children={item.path}/>
            <Cell children={params}/>
            <Cell children={JSON.stringify(item.body)}/>
            <Cell children={JSON.stringify(item.response.data)}/>
        </tr>
    );
};