import { useState } from 'react';
import { Func, ResponseMockDto } from '../../../../../types';


const initialState: ResponseMockDto = {
    code: 200, method: 'GET', path: '/', selectorsMap: {}, template: {},
};

type FieldSetter<K extends keyof ResponseMockDto> = Func<K, Func<ResponseMockDto[K]>>;

type MockFormState = [ResponseMockDto, FieldSetter<keyof ResponseMockDto>];

export const useMockState = (): MockFormState => {
    const [state, setState] = useState<ResponseMockDto>(initialState);

    const fieldSetter = <K extends keyof ResponseMockDto>(key: K) =>
        (value: ResponseMockDto[K]) => setState((prev) => ({ ...prev, [key]: value }));

    return [state, fieldSetter];
};