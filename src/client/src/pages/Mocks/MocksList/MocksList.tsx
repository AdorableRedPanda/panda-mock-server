import React from 'react';
import { useSettings } from '../../../providers';
import { Table } from '../../../components';
import { keySelector, MockColumns, renderers } from './configs';
import { MockRow } from './MockRow';

export const MocksList: React.FC = () => {
    const { mocks } = useSettings();
    return (
        <Table
            rows={mocks}
            renderers={renderers}
            headers={MockColumns}
            rowComponent={MockRow}
            keySelector={keySelector}
        />
    );
};