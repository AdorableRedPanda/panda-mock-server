import React from 'react';

interface ColumnConfig<TRow, Key extends keyof TRow> {
    label: string;
    key: Key;
    width: string;
}

export type CellRenderers<T> = Partial<Record<keyof T, CellRenderer<T, keyof T>>>;

export type CellRenderer<T, K extends keyof T> = (raw: T[K]) => React.ReactElement | string;

export type ColumnsConfig<TRow> = ColumnConfig<TRow, keyof TRow>[];

export type RowComponent<TRow> = React.FC<{data: TRow}>