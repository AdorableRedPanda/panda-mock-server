import {MemoryStore} from "./MemoryStore";
import {RequestsHandler} from "../types";
import {Request} from "../../types";
import {Response} from "../../types/Response";

export class RequestsMocker implements RequestsHandler {
    private store = new MemoryStore();

    constructor() {
        this.getResponse.bind(this);
        this.getMocksList.bind(this);
    }

    public getResponse = <T>(req: Request<T>): Response<string> => {
        try {
            const mock = this.store.getMock(req);
            return { code: 200, data: mock}

        } catch {
            return { code: 404, data: 'request is not mocked'}
        }
    }

    public getMocksList = () => this.store.getList();
}