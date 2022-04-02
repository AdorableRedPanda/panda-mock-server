import React from 'react';
import { StoreProvider } from './StoreProvider';
import { AppWrapper } from './AppWrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './constants';
import { Logs } from './Logs';
import { Mocks } from './Mocks';

export const App:React.FC = () => (
    <StoreProvider>
        <BrowserRouter>
            <AppWrapper>
                <Routes>
                    <Route path={AppRoutes.Logs} element={<Logs />} />
                    <Route path={AppRoutes.Mocks} element={<Mocks />} />
                </Routes>
            </AppWrapper>
        </BrowserRouter>
    </StoreProvider>
);