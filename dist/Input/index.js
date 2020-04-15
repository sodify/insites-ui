var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
import InputAppearance from '../mixins/InputAppearance';
import Tooltip from '../Tooltip';
import { ReactComponent as AlertIcon } from './alert-circle.svg';
import { ReactComponent as HelpIcon } from './help.svg';
var InputWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Icon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0.75rem;\n\n  ", "\n"], ["\n  position: absolute;\n  top: 0.75rem;\n\n  ",
    "\n"])), function (props) {
    return props.position === 'right'
        ? "\n    right: 1rem;\n  "
        : "\n    left: 1rem;\n  ";
});
var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  position: relative;\n\n  ", "\n"], ["\n  ", ";\n  position: relative;\n\n  ",
    "\n"])), InputAppearance, function (props) {
    return props.hasIcon &&
        "\n    padding-left: 3rem;\n  ";
});
export default (function (_a) {
    var hasError = _a.hasError, IconComponent = _a.IconComponent, tooltip = _a.tooltip, rest = __rest(_a, ["hasError", "IconComponent", "tooltip"]);
    return (React.createElement(InputWrapper, { hasError: hasError },
        React.createElement(Input, __assign({ hasError: hasError, hasIcon: !!IconComponent }, rest)),
        tooltip && (React.createElement(Icon, { position: "right" },
            React.createElement(Tooltip.Trigger, null,
                React.createElement(HelpIcon, null),
                React.createElement(Tooltip.Message, null, tooltip)))),
        React.createElement(Icon, null, IconComponent && React.createElement(IconComponent, null)),
        React.createElement(Icon, { position: "right" }, hasError && React.createElement(AlertIcon, null))));
});
var templateObject_1, templateObject_2, templateObject_3;
