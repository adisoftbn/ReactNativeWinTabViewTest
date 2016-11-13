import * as React from 'react';
import { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabViewTest from './src/tabViewTest';

export default class WinTabViewTest extends Component<any,any> {
  render() {
    return (
      <View style={{flex: 1}}>
        <TabViewTest  {...this.props} />
      </View>
    );
  }
}

AppRegistry.registerComponent('WinTabViewTest', () => WinTabViewTest);
