import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Colours } from './app/style';
import TopBar from './app/components/TopBar';
import BottomBar from './app/components/BottomBar'
import * as Font from 'expo-font';

export default class App extends React.Component {

  state = {
    isReady: false
  }

  componentDidMount = async() => {
    await Font.loadAsync({
      'HammersmithOne': require('./assets/fonts/HammersmithOne-Regular.ttf')
    })

    this.setState({ isReady:true })
  }

  render() {
    if (this.state.isReady) {
      return (
        // TODO: Navigate To The MP Screen
        <View style={styles.container}>
          <StatusBar style="auto" />
          <TopBar selected={'MPs'} ></TopBar>
          <BottomBar></BottomBar>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <ActivityIndicator></ActivityIndicator>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.Secondary[100],
    height: '100%',
    width: '100%'
  },
});
