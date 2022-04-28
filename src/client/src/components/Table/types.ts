
type ColumnKey<T> = T extends object ? keyof T : string;

interface HeaderConf<T = unknown> {
    label: string;
    key: ColumnKey<T>;
    width: string;
}

export type HeadersConfig<T = unknown> = HeaderConf<T>[];

