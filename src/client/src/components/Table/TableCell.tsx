import React from 'react';

export const getValidCellData = (rawValue: unknown): React.ReactElement | string | null => {

    if (typeof rawValue === 'number') {
        return rawValue.toString();
    }

    if (typeof rawValue === 'string') {
        return rawValue;
    }

    if (typeof rawValue === 'object' && React.isValidElement(rawValue)) {
        return rawValue;
    }

    return null;
};

export const TableCell: React.FC = (
    { children }
) => (
    <td className="cell ellipsis">
        {getValidCellData(children)}
    </td>
);