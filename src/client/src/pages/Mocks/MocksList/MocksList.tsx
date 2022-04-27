import React from 'react';
import { ResponseMock } from '../../../../../types';
import { RowComponent, Table, TableRow } from '../../../components/Table';
import { Config } from './config';
import { getMockKey } from './getMockKey';
import { resolvers } from './resolvers';
import { useSettings } from '../../../providers/SettingsProvider';

const LogRow: RowComponent<ResponseMock> = ({ data }) => (
    <TableRow data={data} columns={Config} renderers={resolvers} />
);

export const MocksList: React.FC = () => {
    const { mocks } = useSettings();

    return (
        <div className="scroll-container">
            <Table<ResponseMock>
                columns={Config}
                rows={mocks}
                selectKey={getMockKey}
                rowComponent={LogRow}
            />
        </div>
    );
};