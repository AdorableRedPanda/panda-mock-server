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

interface Props {
    colspan?: number;
}


export const Cell: React.FC<Props> = (
    { children, colspan = 1 }
) => (
    <td colSpan={colspan} className="cell">
        {getValidCellData(children)}
    </td>
);