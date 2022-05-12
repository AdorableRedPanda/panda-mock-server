import { CellRenderers, CollapsedRowComponent, HeadersConfig } from './types';
import React, { PropsWithChildren, useCallback } from 'react';
import { Header } from './Header';
import { Func } from '../../../../types';
import { TableRow } from './TableRow';


interface Props<TRow> {
    rows: TRow[];
    headers: HeadersConfig<TRow>;
    keySelector: Func<TRow, string>;
    rowComponent: CollapsedRowComponent<TRow> | null;
    renderers: CellRenderers<TRow>;
}

export const Table = <TRow, >(
    {
        headers, rows, rowComponent: Component, keySelector, renderers,
    }: PropsWithChildren<Props<TRow>>
) => {

    const rowRenderer = useCallback((data) => (
        <TableRow
            renderers={renderers}
            data={data}
            config={headers}
            key={keySelector(data)}
        >
            {Component && <Component data={data} />}
        </TableRow>
    ), [Component]);

    return (
        <table className="table">
            <Header columns={headers} />
            <tbody>
                {rows.map(rowRenderer)}
            </tbody>
        </table>
    );
};