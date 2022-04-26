import { Func, ServerMsgType } from '../../../../../types';
import { MessageBody } from '../../../../../types/WsMessage';
import { useStrictContext } from '../../useStrictContext';
import { useEffect } from 'react';
import { WsContext } from '../WsProvider';

export const useWsSubscription = <T extends ServerMsgType>(type: T, cb: Func<MessageBody<T>>) => {
    const { subscribe, unsubscribe } = useStrictContext(WsContext, 'useWsSubscription', 'WsContext');

    useEffect(() => {
        subscribe([type, cb]);

        return () => unsubscribe([type, cb]);
    }, [subscribe, cb]);
};