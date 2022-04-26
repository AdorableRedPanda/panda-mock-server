import { Context, useContext } from 'react';

export const useStrictContext = <T>(context: Context<T | null>, hookName: string, contextName: string): T => {
    const nullable = useContext(context);
    if (!nullable) {
        throw new Error(`${hookName} must be used with ${contextName} provided.`);
    }
    return nullable;
};