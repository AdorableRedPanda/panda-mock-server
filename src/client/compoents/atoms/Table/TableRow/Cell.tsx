import React from 'react';


export const Cell: React.FC = (
    { children }
) => (
    <td className="cell">
        {children}
    </td>
);