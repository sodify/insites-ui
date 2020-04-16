var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { rgba } from 'polished';
import Box from '../Box';
import { fadeIn, slideDown } from '../mixins/animations';
var ModalOverlay = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: ", ";\n  cursor: pointer;\n  z-index: 0;\n  animation: ", " 0.15s ease-out;\n"], ["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: ", ";\n  cursor: pointer;\n  z-index: 0;\n  animation: ", " 0.15s ease-out;\n"])), function (props) { return rgba(props.theme.colors.darkNavy, 0.25); }, fadeIn);
var ModalContainer = styled(Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 36rem;\n  width: 100%;\n  min-height: 10rem;\n  background-color: ", ";\n  z-index: 1;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.5rem 1rem ", ";\n  padding: 2rem;\n  cursor: default;\n  animation: ", " 0.15s ease-out;\n"], ["\n  max-width: 36rem;\n  width: 100%;\n  min-height: 10rem;\n  background-color: ", ";\n  z-index: 1;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.5rem 1rem ", ";\n  padding: 2rem;\n  cursor: default;\n  animation: ", " 0.15s ease-out;\n"])), function (props) { return props.theme.colors.white; }, function (props) { return rgba(props.theme.colors.darkNavy, 0.075); }, slideDown);
var Footer = styled(Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 2rem;\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  margin-top: 2rem;\n  display: flex;\n  justify-content: flex-end;\n"])));
export var stopPropagation = function (e) {
    e.stopPropagation();
};
var Modal = function (_a) {
    var isVisible = _a.isVisible, onHide = _a.onHide, children = _a.children;
    return isVisible
        ? ReactDOM.createPortal(React.createElement(ModalOverlay, { onClick: onHide },
            React.createElement(ModalContainer, { onClick: stopPropagation }, children)), document.body)
        : null;
};
Modal.Footer = Footer;
export default Modal;
var templateObject_1, templateObject_2, templateObject_3;
