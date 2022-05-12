import React from 'react';
import { Button } from '../../../components';
import { Func } from '../../../../../types';

interface Props {
    filename: string;
    removeCb: Func<string>;
    activateCb: Func<string>;
}

export const FileComponent: React.FC<Props> = ({ filename, removeCb, activateCb }) => {
    const onRemove = () => removeCb(filename);
    const onActivate = () => activateCb(filename);
    return (
        <li className="file">
            <span>{filename}</span>
            <div className="flex gap-10">
                <Button onClick={onRemove} variant="danger" text="Remove" />
                <Button onClick={onActivate} text="Activate"/>
            </div>
        </li>
    );
};