import { ColumnsConfig } from './types';
import React from 'react';
import { Header } from './Header';
import { Row } from './Row';

interface Props<TData = unknown> {
    columns: ColumnsConfig<TData>;
    rows: TData[];
    selectKey: (data: TData, index: number) => string;
}

export const Table = <TRow, >({ columns, rows, selectKey }: Props<TRow>) => (
    <table className="table">
        <Header columns={columns} />
        <tbody>
            {rows.map((row, i) => <Row columns={columns} data={row} key={selectKey(row, i)} />)}
        </tbody>
    </table>
);