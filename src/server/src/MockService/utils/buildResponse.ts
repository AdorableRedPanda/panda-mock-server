import { ResponseInternal, RequestInternal, ResponseMock } from '../../../../types';
import { deepMerge } from 'red-panda-utils';
import { resolveVariable } from './buildVariabledData';

const defaultResponse: ResponseInternal = { code: 404, data: { message: 'Request in not mocked' } };

export const buildResponse = (
    request: RequestInternal,
    mock?: ResponseMock,
): ResponseInternal => {

    if (!mock) {
        return defaultResponse;
    }

    const { variables, template, code } = mock;

    const dynamicValues = variables.map((variable) => resolveVariable(request, variable));

    const data = dynamicValues.flat().reduce((prev, part) => deepMerge(prev, part), template);

    return { code, data };
};




