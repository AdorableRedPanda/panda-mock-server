import React from 'react';
import { useStore } from '../../../StoreProvider';
import { TableHeader } from './TableHeader';
import { Log } from './Log';


export const LogsList: React.FC = () => {
    const { logs } = useStore();

    return (
        <div className="logs_list">
            <h2 className="title">Mock server requests</h2>
            <table className="logs_table">
                <TableHeader />
                <tbody>
                    {
                        logs.map((log, i) => (
                            <Log
                                item={log}
                                key={`${log.path}:${i}`}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};