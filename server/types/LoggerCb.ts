import {Request} from "../../types";
import {Response} from "../../types/Response";

export type LoggerCb = <T>(req: Request, res: Response<T>) => void;