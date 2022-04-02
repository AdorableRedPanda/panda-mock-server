import {RequestSignature} from "./RequestSignature";

export interface Request<T = null, Q = {}> extends RequestSignature {
    body: T;
    query: Q;
}