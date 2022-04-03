import React from 'react';

export const TableHeader: React.FC = () => (
    <tr className="row">
        <th>Timestamp</th>
        <th>Method</th>
        <th>Code</th>
        <th>Path</th>
        <th>Query params</th>
        <th>Request body</th>
        <th>Response data</th>
    </tr>
);