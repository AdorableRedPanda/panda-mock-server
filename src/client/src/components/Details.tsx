import React from 'react';

export interface Props {
    summary: string;
}

export const Details: React.FC<Props> = ({ summary, children }) => (
    <details>
        <summary className="ellipsis">{summary}</summary>
        <div className="details">{children}</div>
    </details>
);