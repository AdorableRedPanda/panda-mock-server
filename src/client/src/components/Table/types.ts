
interface HeaderConf<TRow, Key extends keyof TRow> {
    label: string;
    key: Key | string;
    width: string;
}

export type HeadersConfig<TRow = unknown> = HeaderConf<TRow, keyof TRow>[];
