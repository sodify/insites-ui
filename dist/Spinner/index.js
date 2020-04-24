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
import React from 'react';
import styled from 'styled-components';
import { rotate } from '../mixins/animations';
var StyledSpinner = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 5rem;\n  height: 5rem;\n\n  div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 4rem;\n    height: 4rem;\n    margin: 0.5rem;\n    border: 0.5rem ", " solid;\n    border-radius: 50%;\n    animation: ", " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ", " transparent transparent transparent;\n\n    &:nth-child(1) {\n      animation-delay: -0.45s;\n    }\n\n    &:nth-child(2) {\n      animation-delay: -0.3s;\n    }\n\n    &:nth-child(3) {\n      animation-delay: -0.15s;\n    }\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 5rem;\n  height: 5rem;\n\n  div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 4rem;\n    height: 4rem;\n    margin: 0.5rem;\n    border: 0.5rem ", " solid;\n    border-radius: 50%;\n    animation: ", " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ", " transparent transparent transparent;\n\n    &:nth-child(1) {\n      animation-delay: -0.45s;\n    }\n\n    &:nth-child(2) {\n      animation-delay: -0.3s;\n    }\n\n    &:nth-child(3) {\n      animation-delay: -0.15s;\n    }\n  }\n"])), function (props) { return props.theme.colors.primary; }, rotate, function (props) { return props.theme.colors.primary; });
var Spinner = function (props) { return (React.createElement(StyledSpinner, __assign({}, props, { role: "status" }),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
export default Spinner;
var templateObject_1;
