import React, { PropsWithChildren, useCallback, useState } from 'react';
import { CellRenderer, CellRenderers, HeadersConfig } from './types';
import { Cell } from './Cell';

interface Props<TRow> {
    data: TRow;
    config: HeadersConfig<TRow>;
    renderers: CellRenderers<TRow>;
}

const getCellData = <TCell, >(data: TCell, renderer?: CellRenderer<TCell>) => (
    renderer ? renderer(data) : data
);

export const TableRow = <TRow, >(
    { children, config, data, renderers }: PropsWithChildren<Props<TRow>>
) => {
    const [isOpen, setOpen] = useState(false);
    const toggleRow = useCallback(() => children && setOpen((prev) => !prev), [children]);
    const className = `table_row simple ${children && 'cursor-pointer'} ${isOpen && 'active'}`;

    return (
        <>
            <tr onClick={toggleRow} className={className}>
                {config.map(({ key }) => (
                    <Cell key={key}>
                        {getCellData(data[key], renderers[key])}
                    </Cell>
                ))}
            </tr>
            {isOpen && children && (
                <tr className="table_row collapsible_content">
                    <Cell colspan={config.length}>
                        {children}
                    </Cell>
                </tr>
            )}
        </>
    );
};