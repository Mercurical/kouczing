import {max} from "../basics/zadaniatablicowe";
describe('testowanie zadan tablicowych', () => {
    it('max returns maximum value from given non-empty array', () => {
        const array = [5,6,7,8];
        expect(max(array)).toBe(8);
    });
})