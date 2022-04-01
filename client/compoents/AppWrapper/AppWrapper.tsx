import React from "react";
import {Navigation} from "./components/Navigation";

export const AppWrapper: React.FC = ({children}) => (
    <>
        <Navigation />
        {children}
    </>
)