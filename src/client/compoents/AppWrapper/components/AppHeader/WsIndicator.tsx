import React from 'react';
import { useWsConnection } from '../../../StoreProvider';

export const WsIndicator: React.FC = () => {
    const { state } = useWsConnection();
    return (
        <div className="ws_state">
            <div className={`indicator ${state}`}/>
            {state}
        </div>
    );
};