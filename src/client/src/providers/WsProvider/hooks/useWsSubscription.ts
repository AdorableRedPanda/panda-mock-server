import { Func, ServerMsgBody, ServerMsgType } from '../../../../../types';
import { useStrictContext } from '../../useStrictContext';
import { useEffect } from 'react';
import { WsContext } from '../WsProvider';

export const useWsSubscription = <T extends ServerMsgType>(type: T, cb: Func<ServerMsgBody<T>>) => {
    const { subscribe, unsubscribe } = useStrictContext(WsContext, 'useWsSubscription', 'WsContext');

    useEffect(() => {
        subscribe([type, cb]);

        return () => unsubscribe([type, cb]);
    }, [subscribe, cb]);
};