import React, { useState } from 'react';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components';

interface Props {
    saveMocksState: (filename: string) => void;
}

export const SaveForm: React.FC<Props> = ({ saveMocksState }) => {
    const [filename, setFilename] = useState('');

    const onClick = () => saveMocksState(filename);
    return (
        <div className="save_mocks">
            <TextInput onChange={setFilename} value={filename} label="Filename" name="filename"/>
            <Button onClick={onClick} text="Save current mocks" />
        </div>
    );
};