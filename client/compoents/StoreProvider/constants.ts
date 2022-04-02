import React from 'react';
import { StoreState } from './types';

export const InitialStoreState:StoreState = { logs: [], mocks: [] };

export const StoreContext = React.createContext<StoreState>(InitialStoreState);
