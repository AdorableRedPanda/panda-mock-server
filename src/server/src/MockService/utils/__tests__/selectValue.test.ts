import { selectValue } from '../selectValue';


describe('selectValue tests', () => {
    it('should return null if key doesn\'t exist', () => {
        const target = { f1: { f2: 'second value' } };
        expect(selectValue(['f1', 'f2', 'key'], target)).toBe(null);
        expect(selectValue(['f1', 'key'], target)).toBe(null);
        expect(selectValue(['key'], undefined)).toBe(null);
        expect(selectValue(['key'], null)).toBe(null);
        expect(selectValue(['1'], [])).toBe(null);
    });

    it('should return root for empty path', () => {
        const target = { f1: { f2: 'second value' } };
        expect(selectValue([], target)).toEqual(target);
        expect(selectValue([], null)).toEqual(null);
        expect(selectValue([], undefined)).toEqual(undefined);
        expect(selectValue([], 'hello world')).toEqual('hello world');
    });

});