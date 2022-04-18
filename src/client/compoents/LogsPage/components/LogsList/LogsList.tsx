import React from 'react';
import { RequestLog } from '../../../../../types';
import { getLogKey } from './utils';
import { Table } from '../../../atoms';
import { useStore } from '../../../StoreProvider';
import { Config } from './config';

export const LogsList: React.FC = () => {
    const { logs } = useStore();
    return (
        <div className="logs_list">
            <Table<RequestLog>
                columns={Config}
                selectKey={getLogKey}
                rows={logs}
            />
        </div>
    );
};