"use strict";
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const data_1 = require("./data");
class TestTab1 extends react_1.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let inc = 0;
        return (React.createElement(react_native_1.ScrollView, { style: { flex: 1 } },
            React.createElement(react_native_1.View, { style: { padding: 10 } },
                React.createElement(react_native_1.Text, { style: { fontSize: 50, color: 'red' } }, "TAB 1"),
                data_1.DATASAMPLE.map((item) => {
                    inc++;
                    return React.createElement(react_native_1.Text, { style: { fontSize: 30, color: 'white' }, key: inc }, item);
                }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestTab1;
