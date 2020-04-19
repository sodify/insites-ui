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
var TooltipIcon = function () { return (React.createElement("svg", { width: "16", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M8 16A8 8 0 108 0a8 8 0 000 16z", fill: "#CFD7DF" }),
    React.createElement("path", { d: "M6.06 6a2 2 0 013.89.67c0 1.33-2 2-2 2M8 11.33h0", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var AlertIcon = function () { return (React.createElement("svg", { width: "16", height: "16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("g", { clipPath: "url(#clip0)" },
        React.createElement("path", { d: "M0 8a8 8 0 1116 0A8 8 0 010 8z", fill: "#F27474" }),
        React.createElement("path", { d: "M8 4v4M8 11.7h0", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "clip0" },
            React.createElement("path", { d: "M0 8a8 8 0 1116 0A8 8 0 010 8z", fill: "#fff" }))))); };
export default React.forwardRef(function (props, ref) {
    var hasError = props.hasError, IconComponent = props.IconComponent, tooltip = props.tooltip, rest = __rest(props, ["hasError", "IconComponent", "tooltip"]);
    return (React.createElement(InputWrapper, { hasError: !!hasError },
        React.createElement(Input, __assign({ hasError: !!hasError, hasIcon: !!IconComponent, ref: ref }, rest)),
        !!tooltip && (React.createElement(Icon, { position: "right" },
            React.createElement(Tooltip.Trigger, null,
                React.createElement(TooltipIcon, null),
                React.createElement(Tooltip.Message, null, tooltip)))),
        !!IconComponent && React.createElement(Icon, null,
            React.createElement(IconComponent, null)),
        !!hasError && React.createElement(Icon, { position: "right" },
            React.createElement(AlertIcon, null))));
});
var templateObject_1, templateObject_2, templateObject_3;
