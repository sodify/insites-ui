var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
import { rgba, lighten } from 'polished';
var InputAppearance = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  display: flex;\n  width: 100%;\n  border: 1px ", " solid;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 0.25rem;\n  padding: 0.625rem 1rem;\n  font-size: 1rem;\n  font-family: ", ";\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04);\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none;\n    border: 1px ", " solid;\n    box-shadow: 0 0.125rem 0.5rem ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  appearance: none;\n  display: flex;\n  width: 100%;\n  border: 1px ", " solid;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 0.25rem;\n  padding: 0.625rem 1rem;\n  font-size: 1rem;\n  font-family: ", ";\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04);\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none;\n    border: 1px ", " solid;\n    box-shadow: 0 0.125rem 0.5rem ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  ",
    "\n"])), function (props) { return props.theme.colors.grey; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.colors.white; }, function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.colors.inputFocused; }, rgba('#202C4B', 0.08), function (props) { return lighten(0.25, props.theme.colors.text); }, function (props) {
    return props.hasError &&
        "\n    border: 1px " + props.theme.colors.red + " solid;\n  ";
});
export default InputAppearance;
var templateObject_1;
