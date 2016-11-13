import * as React from 'react';
import { PureComponent } from "react";
import { Text, Image, View } from 'react-native';
import { TabViewAnimated, TabViewPagerPan, TabBar } from 'react-native-tab-view';


import TestTab1 from './testTab1';
import TestTab2 from './testTab2';
import TestTab3 from './testTab3';
import TestTab4 from './testTab4';
import TestTab5 from './testTab5';


export default class tabViewTest extends PureComponent<any,any> {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Tab 1' },
      { key: '2', title: 'Tab 2' },
      { key: '3', title: 'Tab 3' },
      { key: '4', title: 'Tab 4' },
      { key: '5', title: 'Tab 5' },
    ],
    renderPlaceholderOnly:true
  };

  tabList = [];
  constructor(props, context) {
    super(props, context);
  }
  handleChangeTab = (index) => {
    this.setState({ index });
  }

  _renderFooter = (props) => {
    return (
      <TabBar
        {...props}
      />
    );

  };
  _renderScene = ({ route }) => {
    if(route.key=='1') {
      return <TestTab1  {...route.props} />
    } else if (route.key=='2') {
      return <TestTab2  {...route.props} />
    } else if (route.key=='3') {
      return <TestTab3  {...route.props} />
    } else if (route.key=='4') {
      return <TestTab4  {...route.props} />
    } else if (route.key=='5') {
      return <TestTab5  {...route.props} />
    }
    return null;
  };
  _renderPager = (props) => {
     return <TabViewPagerPan {...props} swipeEnabled={false} />;
   };
  _configureTransition = () => null;

  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#222222'}}>
        <TabViewAnimated
          style={{flex: 1}}
          navigationState={this.state}
          renderPager={this._renderPager}
          renderScene={this._renderScene}
          renderFooter={this._renderFooter}
          configureTransition={this._configureTransition}
          onRequestChangeTab={this.handleChangeTab}
        />
      </View>
    );
  }
}
