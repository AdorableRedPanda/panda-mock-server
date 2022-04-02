import {Method} from "./Method";

export interface RequestSignature {
    method: Method;
    path: string;
}