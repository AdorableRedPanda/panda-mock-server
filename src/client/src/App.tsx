import React from 'react';
import { StoreProvider, AppRouting } from './containers';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRoutes } from './constants';
import { Mocks, Logs } from './pages';


export const App:React.FC = () => (
    <StoreProvider>
        <BrowserRouter>
            <AppRouting>
                <Route path={AppRoutes.Logs} element={<Logs />} />
                <Route path={AppRoutes.Mocks} element={<Mocks />} />
            </AppRouting>
        </BrowserRouter>
    </StoreProvider>
);