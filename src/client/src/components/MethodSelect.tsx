import React from 'react';
import { Method } from '../../../types';
import { REST_METHODS } from '../../../constants';
import { SelectInput } from './SelectInput';
import { ChangeHandler } from './types';

type Props = ChangeHandler<Method>;

export const MethodSelect: React.FC<Props> = ({ value, onChange }) => (
    <SelectInput options={REST_METHODS} value={value} onChange={onChange} label="Method" name="method" />
);