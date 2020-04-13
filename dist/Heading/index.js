var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
var HEADING_SIZES = {
    xl: '2rem',
    l: '1.5rem',
    m: '1.25rem'
};
var Heading = styled.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  letter-spacing: 0.02rem;\n"], ["\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  letter-spacing: 0.02rem;\n"])), function (props) { return HEADING_SIZES[props.size || 'xl']; }, function (props) { return props.theme.fonts.heading; }, function (props) { return props.theme.fontWeights.bold; }, function (props) { return props.theme.colors.heading; });
export default Heading;
var templateObject_1;
