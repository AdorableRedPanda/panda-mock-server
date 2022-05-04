import { ClientMessage } from '../types';

export const buildClientMessage = <T>(types: string[], leafBody: T) => (
    [...types]
        .reverse()
        // todo: fix unknown casts
        .reduce((prev, current) => ({ type: current, body: prev } as unknown), leafBody) as unknown as ClientMessage
);
