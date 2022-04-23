import React from 'react';
import { RequestLog } from '../../../../../../types';
import { Table, TableRow } from '../../../../components';
import { RowComponent } from '../../../../components/Table';

import { Config } from './config';
import { useStore } from '../../../../containers';
import { getLogKey } from './getLogKey';
import { resolvers } from './resolvers';


const LogRow: RowComponent<RequestLog> = ({ data }) => (
    <TableRow data={data} columns={Config} resolvers={resolvers} />
);

export const LogsList: React.FC = () => {
    const { logs } = useStore();
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