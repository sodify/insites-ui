import { useEffect } from 'react';
var useClickOutside = function (callback, ref) {
    useEffect(function () {
        var clickOutsideHandler = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event);
            }
        };
        document.addEventListener('mousedown', clickOutsideHandler);
        return function () {
            document.removeEventListener('mousedown', clickOutsideHandler);
        };
    }, [ref, callback]);
};
export default useClickOutside;
