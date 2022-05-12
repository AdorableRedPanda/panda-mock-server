import React from 'react';

interface HeaderConf<T = unknown> {
    label: string;
    key: keyof T;
    width: string;
}

export type HeadersConfig<T = unknown> = HeaderConf<T>[];

export type CollapsedRowComponent<TRow> = React.FC<{data: TRow}>;

export type CellRenderers<T> = Partial<{
    [key in keyof T]: CellRenderer<T[key]>
}>

export type RenderNode = React.ReactNode | string | number | null;

export type CellRenderer<T> = (raw: T) => RenderNode;