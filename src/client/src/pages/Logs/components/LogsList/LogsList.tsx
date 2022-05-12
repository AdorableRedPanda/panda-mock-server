import React from 'react';
import { Table } from '../../../../components';
import { keySelector, renderers, RequestColumns } from './configs';
import { useLogsHistory } from '../../../../providers/LogsStore';
import { LogRow } from './LogRow';

export const LogsList: React.FC = () => {
    const logs = useLogsHistory();

    return (
        <Table
            headers={RequestColumns}
            renderers={renderers}
            rowComponent={LogRow}
            rows={logs}
            keySelector={keySelector}
        />
    );
};