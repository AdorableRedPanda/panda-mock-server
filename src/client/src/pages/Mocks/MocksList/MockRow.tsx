import { Func, RequestSignature, ResponseMock } from '../../../../../types';
import React from 'react';
import { MockColumns, renderers } from './configs';
import { Button, TableCell, TableRow } from '../../../components';


interface Props {
    data: ResponseMock;
    onDelete: Func<RequestSignature>;
}

export const MockRow: React.FC<Props> = ({ data, onDelete }) => {
    const onClick = () => onDelete(data);
    return (
        <TableRow>
            {MockColumns.map(({ key }) => (
                <TableCell key={key} >
                    {renderers[key](data)}
                </TableCell>
            ))}
            <TableCell>
                <Button onClick={onClick} text="Delete" variant="secondary" />
            </TableCell>
        </TableRow>
    );
};