import React from 'react';
import { AppWrapper, WsProvider, LogsStore, SettingsProvider } from './providers';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { AppRoutes } from './constants';
import { Mocks, Logs } from './pages';

export const App:React.FC = () => (
    <WsProvider>
        <LogsStore>
            <SettingsProvider>
                <BrowserRouter>
                    <AppWrapper>
                        <Route path={AppRoutes.Logs} element={<Logs />} />
                        <Route path={AppRoutes.Mocks} element={<Mocks />} />
                        <Route path="/" element={<Navigate to={AppRoutes.Logs} />} />
                    </AppWrapper>
                </BrowserRouter>
            </SettingsProvider>
        </LogsStore>
    </WsProvider>
);