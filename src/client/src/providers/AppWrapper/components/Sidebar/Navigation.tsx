import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../../constants';


export const Navigation: React.FC = () => (
    <nav className="navigation">
        <NavLink className="nav_item" to={AppRoutes.Logs}>Logs</NavLink>
        <NavLink className="nav_item" to={AppRoutes.Mocks}>Mocks</NavLink>
    </nav>
);