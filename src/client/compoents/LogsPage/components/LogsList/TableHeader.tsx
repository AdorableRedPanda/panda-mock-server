import React from 'react';

const Config = [
    ['Timestamp', '10%'],
    ['Method', '10%'],
    ['Path', '10%'],
    ['Query params', '10%' ],
    ['Body', '20%'],
    ['Response', '25%']
];

export const TableHeader: React.FC = () => (
    <>
        <thead>
            <tr className="logs_header">
                {Config.map(([h]) => <th className="cell" key={h}>{h}</th>)}
            </tr>
        </thead>
        <colgroup>
            {Config.map(([h, width]) => <col key={h} width={width} />)}
        </colgroup>
    </>
);