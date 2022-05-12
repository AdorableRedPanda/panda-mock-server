import { SelectorsMap } from '../../../types/SelectorsMap';
import { CellRenderer } from '../components';

export const renderObject = JSON.stringify;

export const renderVars: CellRenderer<SelectorsMap> = (obj) => Object.keys(obj).join(', ');

export const renderTimestamp: CellRenderer<number> = (timestamp) => (new Date(timestamp)).toLocaleTimeString();

