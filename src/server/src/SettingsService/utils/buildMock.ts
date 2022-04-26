import { getVariables } from './getVariables';
import { ResponseMock, ResponseMockDto } from '../../../../types';
import { formPath } from '../../../../utils';

export const buildMock = (mockDto: ResponseMockDto): ResponseMock => {
    const { selectorsMap, template, path } = mockDto;

    const variables = Object.keys(selectorsMap).length ?
        getVariables(selectorsMap, template) : [];

    return { ...mockDto, variables, path: formPath(path) };
};
