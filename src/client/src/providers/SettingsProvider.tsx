import { MockServerSettings } from '../../../types';
import React, { useState } from 'react';
import { useStrictContext } from './useStrictContext';
import { useWsSubscription } from './WsProvider';

const SettingsContext = React.createContext<MockServerSettings | null>(null);

export const useSettings = () =>
    useStrictContext(SettingsContext, 'useSettings', 'SettingsContext');

export const SettingsProvider:React.FC = ({ children }) => {
    const [settings, setSettings] = useState<MockServerSettings>({ mocks: [], port: null, files: [] });
    const updateSettings = (next: MockServerSettings) => setSettings(next);

    useWsSubscription('settings', updateSettings);

    return <SettingsContext.Provider value={settings} children={children} />;
};

