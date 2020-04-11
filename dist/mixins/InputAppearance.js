var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
var InputAppearance = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  border: 1px ", " solid;\n  color: ", ";\n  border-radius: 0.25rem;\n  padding: 0.675rem 1rem;\n  font-size: 0.875rem;\n  font-family: ", ";\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04);\n  box-sizing: border-box;\n  \n  ", "\n"], ["\n  display: flex;\n  width: 100%;\n  border: 1px ", " solid;\n  color: ", ";\n  border-radius: 0.25rem;\n  padding: 0.675rem 1rem;\n  font-size: 0.875rem;\n  font-family: ", ";\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04);\n  box-sizing: border-box;\n  \n  ",
    "\n"])), function (props) { return props.theme.colors.grey; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.fonts.body; }, function (props) { return props.hasError && "\n    border: 1px " + props.theme.colors.red + " solid;\n  "; });
export default InputAppearance;
var templateObject_1;
