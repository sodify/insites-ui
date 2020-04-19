var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import Box from '../Box';
import styled from 'styled-components';
var Label = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-bottom: 0.5rem;\n  color: ", ";\n"], ["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-bottom: 0.5rem;\n  color: ", ";\n"])), function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.fontWeights.semiBold; }, function (props) { return props.theme.colors.text; });
var Error = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-top: 0.5rem;\n  color: ", ";\n"], ["\n  display: block;\n  font-size: 0.75rem;\n  font-family: ", ";\n  font-weight: ", ";\n  margin-top: 0.5rem;\n  color: ", ";\n"])), function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.fontWeights.medium; }, function (props) { return props.theme.colors.red; });
var FormControl = styled(Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 1rem;\n"], ["\n  margin-bottom: 1rem;\n"])));
FormControl.Label = Label;
FormControl.Error = Error;
export default FormControl;
var templateObject_1, templateObject_2, templateObject_3;
