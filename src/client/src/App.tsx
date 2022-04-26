import React from 'react';
import { AppRouting, WsProvider, LogsStore, SettingsProvider } from './providers';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRoutes } from './constants';
import { Mocks, Logs } from './pages';

export const App:React.FC = () => (
    <WsProvider>
        <LogsStore>
            <SettingsProvider>
                <BrowserRouter>
                    <AppRouting>
                        <Route path={AppRoutes.Logs} element={<Logs />} />
                        <Route path={AppRoutes.Mocks} element={<Mocks />} />
                    </AppRouting>
                </BrowserRouter>
            </SettingsProvider>
        </LogsStore>
    </WsProvider>
);