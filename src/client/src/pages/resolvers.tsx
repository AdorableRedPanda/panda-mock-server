import React from 'react';
import { ObjectView, VariablesComponent } from '../components';
import { SelectorsMap } from '../../../types/SelectorsMap';

export const renderObject = (obj: unknown) => <ObjectView obj={obj} />;

export const renderVars = (obj: SelectorsMap) => <VariablesComponent map={obj} />;

export const renderTimestamp = (timestamp: number) => (new Date(timestamp)).toLocaleTimeString();