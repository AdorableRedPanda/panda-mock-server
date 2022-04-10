import { Response } from './Response';
import { Method } from './Method';
import { QueryParam } from './QueryParams';

type Timestamp = string;
type UrlPath = string;
type QueryParams = QueryParam[];

export type RequestLog<TBody = object> = [Timestamp, Method, UrlPath, QueryParams, TBody, Response<TBody>];