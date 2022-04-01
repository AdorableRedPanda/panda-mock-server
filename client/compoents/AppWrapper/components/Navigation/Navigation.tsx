import React from "react";
import {NavLink} from 'react-router-dom';
import {AppRoutes} from "../../../constants";

export const Navigation: React.FC = () => (
    <ul>
        <li>
            <NavLink to={AppRoutes.Logs}>Logs</NavLink>
        </li>
        <li>
            <NavLink to={AppRoutes.Mocks}>Mocks</NavLink>
        </li>
    </ul>
)