/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// screens
import { OnboardingScreen } from './app/screens/Auth';

function App(): JSX.Element {
 
  return (
    <OnboardingScreen/>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
