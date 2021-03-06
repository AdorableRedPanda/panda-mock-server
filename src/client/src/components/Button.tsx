import React from 'react';

interface Props {
    onClick: () => void;
    text: string;
    variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<Props> = ({ onClick, text, variant = 'primary' }) => (
    <button
        className={`button ${variant} cursor-pointer`}
        onClick={onClick}
        type="button"
    >
        {text}
    </button>
);