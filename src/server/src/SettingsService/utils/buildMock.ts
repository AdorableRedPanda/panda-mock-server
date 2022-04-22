import { getVariables } from './getVariables';
import { ResponseMock, ResponseMockDto } from '../../../../types';

export const buildMock = (mockDto : ResponseMockDto): ResponseMock => {
    const { selectorsMap, template } = mockDto;
    if (Object.keys(selectorsMap).length === 0) {
        return { ...mockDto, variables: [] };
    }

    const variables = getVariables(selectorsMap, template);

    return { ...mockDto, variables };
};
