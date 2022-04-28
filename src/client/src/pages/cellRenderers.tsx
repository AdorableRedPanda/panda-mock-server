import React from 'react';
import { ObjectView, VariablesComponent } from '../components';
import { SelectorsMap } from '../../../types/SelectorsMap';

export const renderObject: CellRenderer<object> = (obj) => <ObjectView obj={obj} />;

export const renderVars: CellRenderer<SelectorsMap> = (obj) => <VariablesComponent map={obj} />;

export const renderTimestamp: CellRenderer<number> = (timestamp) => (new Date(timestamp)).toLocaleTimeString();

export type CellRenderers<T> ={
    [key in keyof T]: CellRenderer<T>
}

type CellRenderer<T> = (raw: T) => React.ReactNode;