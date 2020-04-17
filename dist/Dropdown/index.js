var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Box from '../Box';
import useClickOutside from '../hooks/useClickOutside';
var StyledDropdown = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-flex;\n"], ["\n  position: relative;\n  display: inline-flex;\n"])));
var Content = styled(Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  bottom: -4rem;\n  box-shadow: 0 0 1rem ", ";\n  background-color: ", ";\n  border-radius: 0.5rem;\n  min-width: 10rem;\n  padding: 1rem;\n  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;\n\n  ", "\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: -0.5rem;\n    left: 2rem;\n    transform: translate(-50%, -50%);\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: transparent transparent ", " transparent;\n  }\n"], ["\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  bottom: -4rem;\n  box-shadow: 0 0 1rem ", ";\n  background-color: ", ";\n  border-radius: 0.5rem;\n  min-width: 10rem;\n  padding: 1rem;\n  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;\n\n  ",
    "\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: -0.5rem;\n    left: 2rem;\n    transform: translate(-50%, -50%);\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: transparent transparent ", " transparent;\n  }\n"])), function (props) { return rgba(props.theme.colors.darkNavy, 0.1); }, function (props) { return props.theme.colors.white; }, function (props) {
    return props.isVisible &&
        "\n    visibility: visible;\n    opacity: 1;\n  ";
}, function (props) { return props.theme.colors.white; });
var StyledTrigger = styled(Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var Dropdown = function (_a) {
    var children = _a.children, Trigger = _a.Trigger;
    var _b = useState(false), isVisible = _b[0], setIsVisible = _b[1];
    var toggle = function () {
        setIsVisible(!isVisible);
    };
    var contentRef = useRef(null);
    useClickOutside(function (event) {
        var _a, _b;
        var clickedTrigger = (_b = (_a = event === null || event === void 0 ? void 0 : event.path[1]) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.contains('dropdown-trigger');
        if (!clickedTrigger)
            setIsVisible(false);
    }, contentRef);
    return (React.createElement(StyledDropdown, null,
        React.createElement(StyledTrigger, { className: "dropdown-trigger", onClick: toggle },
            React.createElement(Trigger, null)),
        React.createElement(Content, { isVisible: isVisible, ref: contentRef }, children)));
};
export default Dropdown;
var templateObject_1, templateObject_2, templateObject_3;
