import React from 'react';

interface Props {
    onClick: () => void;
    text: string;
}

export const Button: React.FC<Props> = ({ onClick, text }) => (
    <button
        className="button"
        onClick={onClick}
        type="button"
    >
        {text}
    </button>
);