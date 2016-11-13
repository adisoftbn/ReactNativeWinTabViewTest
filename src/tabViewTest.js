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
const react_native_tab_view_1 = require("react-native-tab-view");
const testTab1_1 = require("./testTab1");
const testTab2_1 = require("./testTab2");
const testTab3_1 = require("./testTab3");
const testTab4_1 = require("./testTab4");
const testTab5_1 = require("./testTab5");
class tabViewTest extends react_1.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Tab 1' },
                { key: '2', title: 'Tab 2' },
                { key: '3', title: 'Tab 3' },
                { key: '4', title: 'Tab 4' },
                { key: '5', title: 'Tab 5' },
            ],
            renderPlaceholderOnly: true
        };
        this.tabList = [];
        this.handleChangeTab = (index) => {
            this.setState({ index });
        };
        this._renderFooter = (props) => {
            return (React.createElement(react_native_tab_view_1.TabBar, __assign({}, props)));
        };
        this._renderScene = ({ route }) => {
            if (route.key == '1') {
                return React.createElement(testTab1_1.default, __assign({}, route.props));
            }
            else if (route.key == '2') {
                return React.createElement(testTab2_1.default, __assign({}, route.props));
            }
            else if (route.key == '3') {
                return React.createElement(testTab3_1.default, __assign({}, route.props));
            }
            else if (route.key == '4') {
                return React.createElement(testTab4_1.default, __assign({}, route.props));
            }
            else if (route.key == '5') {
                return React.createElement(testTab5_1.default, __assign({}, route.props));
            }
            return null;
        };
        this._renderPager = (props) => {
            return React.createElement(react_native_tab_view_1.TabViewPagerPan, __assign({}, props, { swipeEnabled: false }));
        };
        this._configureTransition = () => null;
    }
    render() {
        return (React.createElement(react_native_1.View, { style: { flex: 1, backgroundColor: '#222222' } },
            React.createElement(react_native_tab_view_1.TabViewAnimated, { style: { flex: 1 }, navigationState: this.state, renderPager: this._renderPager, renderScene: this._renderScene, renderFooter: this._renderFooter, configureTransition: this._configureTransition, onRequestChangeTab: this.handleChangeTab })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tabViewTest;
