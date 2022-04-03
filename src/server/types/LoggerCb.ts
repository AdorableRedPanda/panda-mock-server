import { Request, Response } from '../../types';

export type LoggerCb = <T>(req: Request, res: Response<T>) => void;