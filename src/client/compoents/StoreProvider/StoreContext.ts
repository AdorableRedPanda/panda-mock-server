import React from 'react';
import { StoreState } from './types';

export const StoreContext = React.createContext<StoreState | null>(null);
