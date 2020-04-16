var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
var Table = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 100%;\n  border-radius: 0.5rem;\n  border: 1px solid ", ";\n  font-family: ", ";\n  background-color: ", ";\n  border-spacing: 0;\n"], ["\n  min-width: 100%;\n  border-radius: 0.5rem;\n  border: 1px solid ", ";\n  font-family: ", ";\n  background-color: ", ";\n  border-spacing: 0;\n"])), function (props) { return props.theme.colors.grey; }, function (props) { return props.theme.fonts.body; }, function (props) { return props.theme.colors.white; });
var Thead = styled.thead(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (props) { return props.theme.colors.heading; });
var Tbody = styled.tbody(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.colors.text; });
var Td = styled.td(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  border-bottom: 1px solid ", ";\n"], ["\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  border-bottom: 1px solid ", ";\n"])), function (props) { return props.theme.colors.grey; });
var Tr = styled.tr(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &:last-of-type {\n    td {\n      border-bottom: none;\n    }\n  }\n"], ["\n  &:last-of-type {\n    td {\n      border-bottom: none;\n    }\n  }\n"])));
var Th = styled.th(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-transform: uppercase;\n  text-align: left;\n  font-size: 0.75rem;\n  padding: 0.75rem 1.5rem;\n  border-bottom: 1px solid ", ";\n"], ["\n  text-transform: uppercase;\n  text-align: left;\n  font-size: 0.75rem;\n  padding: 0.75rem 1.5rem;\n  border-bottom: 1px solid ", ";\n"])), function (props) { return props.theme.colors.grey; });
Table.thead = Thead;
Table.tbody = Tbody;
Table.td = Td;
Table.tr = Tr;
Table.th = Th;
export default Table;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
