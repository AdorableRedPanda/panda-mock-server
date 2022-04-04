import React from 'react';

interface Props {
    colSpan?: number;
    className?: string;
}

export const Cell: React.FC<Props> = (
    { children, colSpan = 1, className = '' }
) => (
    <td className={`cell ${className}`} colSpan={colSpan}>
        {children}
    </td>
);