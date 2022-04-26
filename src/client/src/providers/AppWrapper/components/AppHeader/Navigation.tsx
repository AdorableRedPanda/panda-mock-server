import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../../constants';


export const Navigation: React.FC = () => (
    <nav className="navigation">
        <NavLink to={AppRoutes.Logs}>Logs</NavLink>
        <NavLink to={AppRoutes.Mocks}>Mocks</NavLink>
    </nav>
);