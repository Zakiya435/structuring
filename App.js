import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton'
import AppHeader from './components/appHeader'


export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppHeader />
        <SoundButton />
      </View>
    );
  }
}

