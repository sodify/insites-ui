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
import { ControlContainer, HiddenSelectableAppearance, SelectableAppearance, Label } from '../mixins/SelectableAppearance';
var HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), HiddenSelectableAppearance);
var StyledCheckbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  border-radius: 0.25rem;\n"], ["\n  ", ";\n  border-radius: 0.25rem;\n"])), SelectableAppearance);
export default (function (_a) {
    var id = _a.id, children = _a.children, checked = _a.checked, onChange = _a.onChange, rest = __rest(_a, ["id", "children", "checked", "onChange"]);
    return (React.createElement(ControlContainer, null,
        React.createElement(HiddenCheckbox, __assign({ id: id, checked: checked, readOnly: true }, rest)),
        React.createElement(StyledCheckbox, { checked: checked, onClick: onChange }),
        React.createElement(Label, { onClick: onChange, htmlFor: id }, children)));
});
var templateObject_1, templateObject_2;
