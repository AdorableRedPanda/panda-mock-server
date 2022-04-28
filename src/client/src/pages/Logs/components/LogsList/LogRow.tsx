import React from 'react';
import { renderers, RequestColumns } from './configs';
import { RequestLog } from '../../../../../../types';
import { TableCell, TableRow } from '../../../../components';

interface Props {
    data: RequestLog;
}

export const LogRow: React.FC<Props> = ({ data }) => (
    <TableRow>
        {RequestColumns.map(({ key }) => (
            <TableCell key={key} >
                {renderers[key](data)}
            </TableCell>
        ))}
    </TableRow>
);