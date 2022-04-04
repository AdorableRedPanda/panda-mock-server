import React, { useState } from 'react';
import { RequestLog } from '../../../../../types';
import { Cell } from './Cell';

interface Props {
    item: RequestLog;
}

export const Log: React.FC<Props> = ({ item }) => {
    const { timestamp, method, path, body, queryParams, response } = item;

    const params = queryParams.map(([key, value]) => <span className="params_item">{`${key}=${value}`}</span>);

    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen((prev) => !prev);

    const className= isOpen ? 'log_row expanded' : 'log_row';

    const buttonLabel = !isOpen ? 'show' : 'hide';

    return (
        <>
            <tr className={className}>
                <Cell children={timestamp}/>
                <Cell children={method.toUpperCase()}/>
                <Cell children={path}/>
                <Cell className="params" children={params}/>
                <Cell children={JSON.stringify(body)}/>
                <Cell children={JSON.stringify(response)}/>
                <Cell children={<button onClick={toggle}>{buttonLabel}</button>} />
            </tr>
        </>
    );
};

