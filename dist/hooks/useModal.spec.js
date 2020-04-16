import { renderHook, act } from '@testing-library/react-hooks';
import useModal from './useModal';
describe('useModal hook', function () {
    it('state should initially be set to false', function () {
        var result = renderHook(function () { return useModal(); }).result;
        expect(result.current.isVisible).toBeFalsy();
    });
    it('state should have a toggleable state', function () {
        var result = renderHook(function () { return useModal(); }).result;
        act(function () {
            result.current.toggle();
        });
        expect(result.current.isVisible).toBeTruthy();
    });
});
