import React from 'react';
import { StoreProvider } from './StoreProvider';
import { AppRouting } from './AppWrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRoutes } from './constants';
import { LogsPage } from './LogsPage';
import { MocksPage } from './MocksPage';

export const App:React.FC = () => (
    <StoreProvider>
        <BrowserRouter>
            <AppRouting>
                <Route path={AppRoutes.Logs} element={<LogsPage />} />
                <Route path={AppRoutes.Mocks} element={<MocksPage />} />
            </AppRouting>
        </BrowserRouter>
    </StoreProvider>
);