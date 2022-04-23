import React from 'react';
import { WsCtx } from './types';

export const WsContext = React.createContext<WsCtx | null>(null);