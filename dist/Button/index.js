var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { variant, space, color, typography, layout } from 'styled-system';
var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  border: none;\n  font-size: 1rem;\n  display: inline-flex;\n  padding: 0.5rem 0.75rem;\n  color: ", ";\n  font-family: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  background-color: transparent;\n\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  border: none;\n  font-size: 1rem;\n  display: inline-flex;\n  padding: 0.5rem 0.75rem;\n  color: ", ";\n  font-family: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  background-color: transparent;\n\n  &:focus {\n    outline: none;\n  }\n\n  ",
    "\n\n  ",
    "\n"])), space, color, typography, layout, function (props) { return props.theme.colors.heading; }, function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.fontWeights.semiBold; }, function (props) {
    return variant({
        variants: {
            primary: {
                color: props.theme.colors.white,
                backgroundColor: props.theme.colors.primary,
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                boxShadow: '0px 0.25rem 0.375rem rgba(31, 55, 108, 0.12)'
            },
            secondary: {
                color: props.theme.colors.primary,
                backgroundColor: props.theme.colors.lightBlue,
                padding: '1rem 2rem',
                borderRadius: '0.5rem'
            },
            pill: {
                color: props.theme.colors.green,
                backgroundColor: props.theme.colors.lightGreen,
                padding: '1rem 2rem',
                borderRadius: '2rem'
            },
            blank: {
                backgroundColor: props.theme.colors.white,
                border: "1px " + props.theme.colors.grey + " solid",
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                boxShadow: '0px 0.125rem 0.25rem rgba(0, 0, 0, 0.04)'
            }
        }
    });
}, variant({
    prop: 'size',
    variants: {
        small: {
            padding: '0.75rem 1.5rem',
            fontSize: '0.875rem'
        },
        huge: {
            padding: '1.25rem 2.5rem'
        }
    }
}));
export default Button;
var templateObject_1;
