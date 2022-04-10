export interface Response<T = object> {
    code: number;
    data: T;
}