import {MockPattern} from "./MockPattern";
import {RequestSignature} from './RequestSignature';

export interface RequestMock extends RequestSignature {
    pattern: MockPattern;
}