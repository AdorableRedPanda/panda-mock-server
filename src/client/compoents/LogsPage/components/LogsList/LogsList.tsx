import React from 'react';
import { RequestLog, ResponseInternal } from '../../../../../types';
import { Table, TableRow } from '../../../atoms';
import { useStore } from '../../../StoreProvider';
import { Config } from './config';
import { RowComponent, Resolvers } from '../../../atoms/Table';

const timestampResolver = (timestamp: number) => (new Date(timestamp)).toLocaleTimeString();

const getObjectResolver = (space: number = 0) => (obj: unknown) => (<pre className="margin-0">{ JSON.stringify(obj, null, space) }</pre>);

const keySelector = (log: RequestLog) => log.timestamp.toString();

const logResolvers: Resolvers<RequestLog> = {
    timestamp: timestampResolver,
    query: getObjectResolver(2),
    body: getObjectResolver(2),
    response: ({ data }: ResponseInternal) => getObjectResolver(2)(data),
};

const LogRow: RowComponent<RequestLog> = ({ data }) => (
    <TableRow data={data} columns={Config} resolvers={logResolvers} />
);


export const LogsList: React.FC = () => {
    const { logs } = useStore();
    return (
        <div className="scroll-container">
            <Table<RequestLog>
                columns={Config}
                rows={logs}
                selectKey={keySelector}
                rowComponent={LogRow}
            />
        </div>
    );
};