export interface LabelProps {
    label: string;
    name: string;
}

export interface ChangeHandler<T = string> {
    onChange: (value: T) => void;
    value: T;
}

export type InputProps<T = string> =
    ChangeHandler<T> &
    LabelProps &
    { placeholder?: string };

export interface SelectInputProps<T extends string = string> extends InputProps<T> {
    options: string[];
}