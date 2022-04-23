import React from 'react';
import { useStore } from '../../StoreProvider';
import { Table, TableRow } from '../../atoms';
import { ResponseMock } from '../../../../types';
import { Config } from './config';
import { Resolvers, RowComponent } from '../../atoms/Table';

const keySelector = ({ method, path }: ResponseMock) => `${method}_${path}`;

const getObjectResolver = (space: number = 0) => (obj: unknown) => (<pre className="margin-0">{ JSON.stringify(obj, null, space) }</pre>);

const logResolvers: Resolvers<ResponseMock> = {
    selectorsMap: getObjectResolver(2),
    template: getObjectResolver(2),
};

const LogRow: RowComponent<ResponseMock> = ({ data }) => (
    <TableRow data={data} columns={Config} resolvers={logResolvers} />
);

export const MocksList: React.FC = () => {
    const { mocks } = useStore();

    return (
        <div className="scroll-container">
            <Table<ResponseMock>
                columns={Config}
                rows={mocks}
                selectKey={keySelector}
                rowComponent={LogRow}
            />
        </div>
    );
};