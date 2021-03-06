"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const tabViewTest_1 = require("./src/tabViewTest");
class WinTabViewTest extends react_1.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: { flex: 1 } },
            React.createElement(tabViewTest_1.default, __assign({}, this.props))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WinTabViewTest;
react_native_1.AppRegistry.registerComponent('WinTabViewTest', () => WinTabViewTest);
