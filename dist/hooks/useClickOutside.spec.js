import { renderHook } from '@testing-library/react-hooks';
import useClickOutside from './useClickOutside';
describe('useClickOutside hook', function () {
    it('state subscribe to DOM events', function () {
        var mockRef = jest.fn();
        var result = renderHook(function () { return useClickOutside(function () { }, mockRef); }).result;
        expect(result.error).toBeFalsy();
    });
});
