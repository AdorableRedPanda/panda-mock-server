import React from 'react';
import { RequestLog } from '../../../../../../types';
import { CollapsedRowComponent, ObjectView, TextView } from '../../../../components';
import { queryPreview } from './queryPreview';


export const LogRow: CollapsedRowComponent<RequestLog> = (
    { data: { response, body, timestamp, path, method, query } }
) => (
    <div className="margin-0-20">
        <div className="grid-3">
            <div>
                <TextView value={(new Date(timestamp)).toISOString()} label="Timestamp" />
                <TextView label="Method" value={method} />
                <TextView label="Path" value={path} />
                <TextView label="Params" value={`?${queryPreview(query)}`} />
            </div>
            <ObjectView value={body} label="Body" />
            <ObjectView value={response} label="Response" />
        </div>
    </div>
);