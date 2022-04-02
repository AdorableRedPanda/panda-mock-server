import React from 'react';
import { useStore } from '../StoreProvider';
import { Log } from './Log';
import { TableHeader } from './TableHeader';

export const Logs: React.FC = () => {
    const { logs } = useStore();

    return (
        <div className="logs_container">
            <h2 className="logs_title">Mock server requests</h2>
            <table className="logs_table">
                <tbody>
                <TableHeader />
                {
                   logs.map((log, i) => (
                        <Log item={log} key={`${log.path}:${i}`}/>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};