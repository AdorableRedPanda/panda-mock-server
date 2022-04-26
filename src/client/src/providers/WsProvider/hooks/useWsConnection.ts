import { WsConnection } from '../types';
import { useStrictContext } from '../../useStrictContext';
import { WsContext } from '../WsProvider';

export const useWsConnection = (): WsConnection =>
    useStrictContext(WsContext, 'useWsConnection', 'WsContext');