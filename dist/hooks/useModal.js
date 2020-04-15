import { useState } from 'react';
var useModal = function () {
    var _a = useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var toggle = function () {
        setIsVisible(!isVisible);
    };
    return {
        isVisible: isVisible,
        toggle: toggle
    };
};
export default useModal;
