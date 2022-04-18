interface ColumnConfig<TRow, Key extends keyof TRow> {
    label: string;
    key: Key;
    width: string;
    resolver?: Resolver<TRow[Key]>;
}

export type Resolver<T> = (raw: T) => string;

export type ColumnsConfig<TRow> = ColumnConfig<TRow, keyof TRow>[];