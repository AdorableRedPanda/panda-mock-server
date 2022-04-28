import React from 'react';
import { Table } from '../../../../components';
import { ButtonsConf, RequestColumns } from './configs';
import { useLogsHistory } from '../../../../providers/LogsStore';
import { LogRow } from './LogRow';

export const LogsList: React.FC = () => {
    const logs = useLogsHistory();
    return (
        <div className="scroll-container">
            <Table headers={[...RequestColumns, ...ButtonsConf]} >
                {logs.map((log) => <LogRow data={log} key={log.timestamp.toString()} />)}
            </Table>
        </div>
    );
};