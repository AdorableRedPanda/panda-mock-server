import React from 'react';

interface Props {
    title: string;
}

export const PageHeader: React.FC<Props> = ({ title, children }) => (
    <div className="page_header">
        <div className="title">
            <h2>{title}</h2>
        </div>
        <div className="flex gap-10 align-items-center">
            {children}
        </div>
    </div>
);