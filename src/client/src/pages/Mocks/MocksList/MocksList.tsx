import React from 'react';
import { ResponseMock } from '../../../../../types';
import { RowComponent, Table, TableRow } from '../../../components/Table';
import { useStore } from '../../../containers';
import { Config } from './config';
import { getMockKey } from './getMockKey';
import { resolvers } from './resolvers';



const LogRow: RowComponent<ResponseMock> = ({ data }) => (
    <TableRow data={data} columns={Config} resolvers={resolvers} />
);

export const MocksList: React.FC = () => {
    const { mocks } = useStore();

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