import { formPath } from '../formPath';

const examples = [
    '/', '', '///', '/adwed// // // 123/123 ', '23131', '132/123', '/1231',
];

const allTrue = (arr: boolean[]) => arr.every((b) => b);

describe('formPath tests', () => {

    it('should remove multiple slashes', () => {
        const res = examples.map(formPath).map((str) => !str.includes('//'));
        expect(allTrue(res)).toBe(true);
    });

    it('should return a string starting with "/"', () => {
        const res = examples.map((srt) => formPath(srt).startsWith('/'));
        expect(allTrue(res)).toBe(true);
    });

    it('should be idempotent', () => {
        const res = examples.map(formPath).map((str) => str === formPath(str));
        expect(allTrue(res)).toBe(true);
    });
});