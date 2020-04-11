var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import Box from '../Box';
import styled from 'styled-components';
var Label = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-bottom: 0.5rem;\n"], ["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-bottom: 0.5rem;\n"])), function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.fontWeights.semiBold; });
var Error = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-top: 0.5rem;\n  color: ", ";\n"], ["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-top: 0.5rem;\n  color: ", ";\n"])), function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.fontWeights.medium; }, function (props) { return props.theme.colors.red; });
export { Label, Error };
export default Box;
var templateObject_1, templateObject_2;
