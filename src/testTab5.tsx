import * as React from 'react';
import { PureComponent } from "react";
import { Text, View, ScrollView } from 'react-native';
import { DATASAMPLE } from './data';

export default class TestTab5 extends PureComponent<any,any> {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let inc = 0;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{padding:10}}>
          <Text style={{fontSize:50, color:'red'}}>TAB 5</Text>
          {DATASAMPLE.map((item) => {
            inc++;
            return <Text style={{fontSize:30, color:'white'}} key={inc}>{item}</Text>
          })}
        </View>
      </ScrollView>
    );
  }
}
