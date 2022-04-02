import React from 'react';
import { useStore } from '../StoreProvider';
import { Log } from './Log';

export const Logs: React.FC = () => {
    const { logs } = useStore();

    return (
        <div className="logs_container">
            {logs.map((log, i) => (
                <Log item={log} key={`${log.path}:${i}`}/>
            ))}
        </div>
    );
};