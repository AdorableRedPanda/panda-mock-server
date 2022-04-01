import {HttpMethod} from "./HttpMethod";

export interface RequestLog {
    method: HttpMethod;
    path: string;
    response: unknown;
}