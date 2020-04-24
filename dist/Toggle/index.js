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
import styled, { css } from 'styled-components';
import { ControlContainer, HiddenSelectableAppearance, Label } from '../mixins/SelectableAppearance';
import rgba from 'polished/lib/color/rgba';
var HiddenToggle = styled.input.attrs({ type: 'checkbox' })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), HiddenSelectableAppearance);
var StyledToggle = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 2.75rem;\n  height: 1.5rem;\n  background-color: ", ";\n  transition: background-color 0.1s ease-out;\n  box-shadow: 0 0.125rem 0.25rem ", ";\n  cursor: pointer;\n  border-radius: 2.75rem;\n  position: relative;\n\n  &::after {\n    content: '';\n    height: 1.25rem;\n    width: 1.25rem;\n    background-color: ", ";\n    transition: left 0.1s ease-out;\n    border-radius: 50%;\n    position: absolute;\n    top: 0.125rem;\n    left: 0.125rem;\n  }\n\n  ", "\n"], ["\n  width: 2.75rem;\n  height: 1.5rem;\n  background-color: ", ";\n  transition: background-color 0.1s ease-out;\n  box-shadow: 0 0.125rem 0.25rem ", ";\n  cursor: pointer;\n  border-radius: 2.75rem;\n  position: relative;\n\n  &::after {\n    content: '';\n    height: 1.25rem;\n    width: 1.25rem;\n    background-color: ", ";\n    transition: left 0.1s ease-out;\n    border-radius: 50%;\n    position: absolute;\n    top: 0.125rem;\n    left: 0.125rem;\n  }\n\n  ",
    "\n"])), function (props) { return rgba(props.theme.colors.grey, 0.75); }, rgba('#000', 0.04), function (props) { return props.theme.colors.white; }, function (props) {
    return props.checked && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n\n      &::after {\n        left: calc(100% - 1.375rem);\n      }\n    "], ["\n      background-color: ", ";\n\n      &::after {\n        left: calc(100% - 1.375rem);\n      }\n    "])), props.theme.colors.primary);
});
export default React.forwardRef(function (props, ref) {
    var id = props.id, children = props.children, checked = props.checked, onChange = props.onChange, rest = __rest(props, ["id", "children", "checked", "onChange"]);
    return (React.createElement(ControlContainer, null,
        React.createElement(HiddenToggle, __assign({ id: id, checked: checked, ref: ref, readOnly: true }, rest)),
        React.createElement(StyledToggle, { checked: checked, onClick: onChange }),
        React.createElement(Label, { onClick: onChange, htmlFor: id }, children)));
});
var templateObject_1, templateObject_2, templateObject_3;
