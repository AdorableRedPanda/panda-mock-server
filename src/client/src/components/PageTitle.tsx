import React from 'react';

interface Props {
    title: string;
}

export const PageHeader: React.FC<Props> = ({ title }) => (
    <div className="title">
        <h2>{title}</h2>
    </div>
);