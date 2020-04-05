import React, {Component} from 'react';
import {Text, View} from 'react-native';

import WebView from 'react-native-webview';

interface Props {}
interface State {}
interface Event {
  nativeEvent: {
    data: string;
  }
}

export default class Cordova extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View style={{ height: 400 }}>
        <WebView
          source={{ uri: 'file:///android_asset/www/index.html' }}
          automaticallyAdjustContentInsets={false}
          onMessage={(event: Event) => {
            alert(event.nativeEvent.data);
          }}          
        />
      </View>
    );
  }
}
