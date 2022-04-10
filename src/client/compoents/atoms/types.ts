export interface LabelProps {
    label: string;
    name: string;
}

export interface InputProps extends LabelProps {
    onChange: (value: string) => void;
    value: string;
}

export interface SelectProps extends InputProps {
    options: string[];
}