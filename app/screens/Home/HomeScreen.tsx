import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UITextButton, UITextView} from '../../components';

// constants
import {COLORS, STYLES, DIMENSIONS, ICONS} from '../../constants';

const HomeScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  return (
    <UIContainer>
      <UITextView text="Home screen" />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
