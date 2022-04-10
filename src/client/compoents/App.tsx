import React from 'react';
import { StoreProvider } from './StoreProvider';
import { AppRouting } from './AppWrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRoutes } from './constants';
import { LogsPage } from './LogsPage';

export const App:React.FC = () => (
    <StoreProvider>
        <BrowserRouter>
            <AppRouting>
                <Route path={AppRoutes.Logs} element={<LogsPage />} />
            </AppRouting>
        </BrowserRouter>
    </StoreProvider>
);