import React from 'react';
import { RequestLog } from '../../../types';

interface Props {
    item: RequestLog;
}

export const Log: React.FC<Props> = ({ item }) => (
    <div className="log_item">
        {JSON.stringify(item)}
    </div>
);