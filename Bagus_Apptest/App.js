import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Store } from './src/Store/Store';
import {Provider} from 'react-redux'
import FlashMessage from 'react-native-flash-message';
import Root from './Root';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" />
      <Provider store={Store}>
            <Root/>
        <FlashMessage position="top" floating={true} />
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})