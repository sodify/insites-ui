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
import styled from 'styled-components';
import { variant, space, color, typography, layout } from 'styled-system';
var disabledButtonProps = function (props) { return ({
    '&:disabled': {
        color: props.theme.colors.text,
        backgroundColor: props.theme.colors.grey,
        cursor: 'not-allowed'
    }
}); };
var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  border: none;\n  font-size: 1rem;\n  display: inline-block;\n  padding: 0.5rem 0.75rem;\n  color: ", ";\n  font-family: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  background-color: transparent;\n\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  border: none;\n  font-size: 1rem;\n  display: inline-block;\n  padding: 0.5rem 0.75rem;\n  color: ", ";\n  font-family: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  background-color: transparent;\n\n  &:focus {\n    outline: none;\n  }\n\n  ",
    "\n\n  ",
    "\n"])), space, color, typography, layout, function (props) { return props.theme.colors.heading; }, function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.fontWeights.semiBold; }, function (props) {
    return variant({
        variants: {
            primary: __assign({ color: props.theme.colors.white, backgroundColor: props.theme.colors.primary, padding: '1rem 2rem', borderRadius: '0.5rem', boxShadow: '0px 0.25rem 0.375rem rgba(31, 55, 108, 0.12)' }, disabledButtonProps(props)),
            secondary: __assign({ color: props.theme.colors.primary, backgroundColor: props.theme.colors.lightBlue, padding: '1rem 2rem', borderRadius: '0.5rem' }, disabledButtonProps(props)),
            pill: __assign({ color: props.theme.colors.green, backgroundColor: props.theme.colors.lightGreen, padding: '1rem 2rem', borderRadius: '2rem' }, disabledButtonProps(props)),
            blank: __assign({ backgroundColor: props.theme.colors.white, border: "1px " + props.theme.colors.grey + " solid", padding: '0.75rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0px 0.125rem 0.25rem rgba(0, 0, 0, 0.04)' }, disabledButtonProps(props)),
            tab: {
                padding: '0.5rem 1rem',
                color: props.theme.colors.text,
                borderBottom: "2px " + props.theme.colors.grey + " solid"
            },
            'tab--active': {
                padding: '0.5rem 1rem',
                color: props.theme.colors.primary,
                borderBottom: "2px " + props.theme.colors.primary + " solid"
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
