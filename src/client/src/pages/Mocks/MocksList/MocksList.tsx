import React from 'react';
import { useSettings, useWsConnection } from '../../../providers';
import { Table } from '../../../components';
import { MockRow } from './MockRow';
import { ButtonsConf, MockColumns } from './configs';
import { Func, ResponseMockDto } from '../../../../../types';


export const MocksList: React.FC = () => {
    const { mocks } = useSettings();
    const { send } = useWsConnection();

    const onDelete: Func<ResponseMockDto> = (mock) => send(['mock_delete', mock]);

    return (
        <div className="scroll-container">
            <Table headers={[...MockColumns, ...ButtonsConf]}>
                {mocks.map(mock => (
                    <MockRow
                        data={mock}
                        key={`${mock.path}_${mock.method}`}
                        onDelete={onDelete}
                    />
                ))}
            </Table>
        </div>
    );
};