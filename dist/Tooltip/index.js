var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
var Message = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  visibility: hidden;\n  opacity: 0;\n  top: -1.5rem;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  min-width: 4rem;\n  text-align: center;\n  white-space: nowrap;\n  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: calc(100% + 0.25rem);\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: ", " transparent transparent transparent;\n  }\n"], ["\n  position: absolute;\n  visibility: hidden;\n  opacity: 0;\n  top: -1.5rem;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  min-width: 4rem;\n  text-align: center;\n  white-space: nowrap;\n  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: calc(100% + 0.25rem);\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: ", " transparent transparent transparent;\n  }\n"])), function (props) { return props.theme.colors.darkNavy; }, function (props) { return props.theme.colors.white; }, function (props) { return props.theme.colors.darkNavy; });
var Trigger = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  font-family: ", ";\n\n  &:hover ", " {\n    visibility: visible;\n    opacity: 1;\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n  font-family: ", ";\n\n  &:hover ", " {\n    visibility: visible;\n    opacity: 1;\n  }\n"])), function (props) { return props.theme.fonts.body; }, Message);
export default {
    Trigger: Trigger,
    Message: Message
};
var templateObject_1, templateObject_2;
