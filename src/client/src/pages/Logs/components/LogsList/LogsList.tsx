import React from 'react';
import { RequestLog } from '../../../../../../types';
import { Table, TableRow } from '../../../../components';
import { RowComponent } from '../../../../components/Table';

import { Config } from './config';
import { getLogKey } from './getLogKey';
import { resolvers } from './resolvers';
import { useLogsHistory } from '../../../../providers/LogsStore';


const LogRow: RowComponent<RequestLog> = ({ data }) => (
    <TableRow data={data} columns={Config} renderers={resolvers} />
);

export const LogsList: React.FC = () => {
    const logs = useLogsHistory();
    return (
        <div className="scroll-container">
            <Table<RequestLog>
                columns={Config}
                rows={logs}
                selectKey={getLogKey}
                rowComponent={LogRow}
            />
        </div>
    );
};