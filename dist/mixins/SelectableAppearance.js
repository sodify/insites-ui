var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import hideVisually from 'polished/lib/mixins/hideVisually';
var HiddenSelectableAppearance = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), hideVisually());
var SelectableAppearance = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 1px ", " solid;\n  background-color: ", ";\n  transition: background-color 0.1s ease-out;\n  box-shadow: 0 0.125rem 0.25rem ", ";\n  cursor: pointer;\n\n  ", "\n"], ["\n  width: 1.25rem;\n  height: 1.25rem;\n  border: 1px ", " solid;\n  background-color: ", ";\n  transition: background-color 0.1s ease-out;\n  box-shadow: 0 0.125rem 0.25rem ", ";\n  cursor: pointer;\n\n  ",
    "\n"])), function (props) { return props.theme.colors.grey; }, function (props) { return props.theme.colors.white; }, rgba('#000', 0.04), function (props) {
    return props.checked &&
        "\n    background-color: " + props.theme.colors.primary + ";\n    background-image: url(data:image/svg+xml;base64,CiAgPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTMuMyA0TDYgMTEuMyAyLjcgOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDwvc3ZnPgo=);\n    background-repeat: no-repeat;\n    background-position: center center;\n    border: 1px " + props.theme.colors.white + " solid;\n  ";
});
var ControlContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  font-family: ", ";\n"], ["\n  display: flex;\n  font-family: ", ";\n"])), function (props) { return props.theme.fonts.body; });
var Label = styled.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0.125rem 1rem;\n  font-size: 0.875rem;\n  color: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n"], ["\n  margin: 0.125rem 1rem;\n  font-size: 0.875rem;\n  color: ", ";\n  font-weight: ", ";\n  cursor: pointer;\n"])), function (props) { return props.theme.colors.text; }, function (props) { return props.theme.fontWeights.medium; });
export { ControlContainer, HiddenSelectableAppearance, SelectableAppearance, Label };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
