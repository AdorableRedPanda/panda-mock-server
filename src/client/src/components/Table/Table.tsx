import { HeadersConfig } from './types';
import React, { PropsWithChildren } from 'react';
import { Header } from './Header';

interface Props<TData = unknown> {
    headers: HeadersConfig<TData>;
}

export const Table = <TRow, >({ headers, children }: PropsWithChildren<Props<TRow>>) => (
    <table className="table">
        <Header columns={headers} />
        <tbody>
            {children}
        </tbody>
    </table>
);