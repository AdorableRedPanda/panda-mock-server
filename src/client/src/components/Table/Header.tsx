import React from 'react';
import { HeadersConfig } from './types';

interface Props<TRow> {
   columns: HeadersConfig<TRow>;
}

export const Header = <TRow, >({ columns }: Props<TRow>): React.ReactElement => (
    <>
        <thead>
        <tr className="table_header">
            {columns.map(({ label, key }) => <th className="cell" key={key}>{label}</th>)}
        </tr>
        </thead>
        <colgroup>
            {columns.map(({ key, width }) => <col key={key} width={width} />)}
        </colgroup>
    </>
);