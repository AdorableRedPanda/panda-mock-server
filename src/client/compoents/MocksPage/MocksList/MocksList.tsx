import React from 'react';
import { useStore } from '../../StoreProvider';
import { Table } from '../../atoms';
import { RequestMock } from '../../../../types';
import { Config } from './config';
import { getMockKey } from './getMockKey';

export const MocksList: React.FC = () => {
    const { mocks } = useStore();

    return (
        <Table<RequestMock>
            columns={Config}
            selectKey={getMockKey}
            rows={mocks}
        />
    );
};