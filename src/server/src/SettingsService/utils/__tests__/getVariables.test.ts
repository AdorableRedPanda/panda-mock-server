import { getVariables } from '../getVariables';

describe('getVariables tests', () => {
    it('result length should compare with count of variables occurring in the map and template', () => {
        const template = {
            key1: { key: '$var1' },
            key2: '$var2',
            key3: { $var3: { $var4: '$var3' } },
            $var3: '$var3',
        };
        expect(getVariables({ }, template).length).toEqual(0);
        expect(getVariables({ $var1: [] }, template).length).toEqual(1);
        expect(getVariables({ $var1: [], $var2: [] }, template).length).toEqual(2);
        expect(getVariables({ $var1: [], $var2: [], $var3: [] }, template).length).toEqual(3);
    });

    it('should omit variables missing in template', () => {
        expect(getVariables({ $var1: [], $var2: [], $var3: [] }, {}).length).toEqual(0);
    });

    it('variable targets count should compare with occurrences in template', () => {
        const template1 = { key1: { key1: '$var1', key2: '$var1' }, key2: '$var1' };
        const vars = getVariables({ $var1: [] }, template1);
        if (!vars.length) {
            throw new Error('previous test broken');
        }
        const [{ targets }]= vars;
        expect(targets.length).toBe(3);
    });

    it('should ignore variable name in non-leaf occurrences', () => {
        const template1 = { $var1: { $var1: 'data' }, key2: 'data' };
        const vars = getVariables({ $var1: [] }, template1);
        expect(vars.length).toBe(0);
    });
});