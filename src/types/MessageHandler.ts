export interface MessageHandler<T> {
    handleMessage: (message: T, ...args: unknown[]) => void;
}