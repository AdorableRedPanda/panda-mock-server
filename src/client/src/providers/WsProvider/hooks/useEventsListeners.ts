import { useCallback, useState } from 'react';
import { ListenerHandler, ListenersHook, SubscriptionListeners, OnMessage } from '../types';
import { ServerMsgType } from '../../../../../types';

export const useEventsListeners = () : ListenersHook => {
    const [handlers, setHandlers] = useState<SubscriptionListeners>({ settings: [], requests: [] });

    const subscribe: ListenerHandler<ServerMsgType> = useCallback(
        ([type, cb]) => setHandlers((prev) => ({ ...prev, [type]: [...prev[type], cb] })),
        [setHandlers]
    );
    const unsubscribe: ListenerHandler<ServerMsgType> = useCallback(
        ([type, cb]) => setHandlers(
            (prev) => ({ ...prev, [type]: prev[type].filter(item => item !== cb) })
        ), [setHandlers]
    );

    const onMessage: OnMessage = useCallback(([type, body]) => {
        handlers[type].forEach(cb => cb(body));
    }, [handlers]);

    return { onMessage, subscribe, unsubscribe };
};