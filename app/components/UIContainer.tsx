import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  ViewStyle,
} from 'react-native';

// constants
import {DIMENSIONS, COLORS} from '../constants';

const {screenHeight, screenWidth} = DIMENSIONS;

interface propTypes {
  parentStyles?: ViewStyle | ViewStyle[];
  childStyles?: ViewStyle | ViewStyle[];
  children: JSX.Element | JSX.Element[];
}

const UIContainer = (props: propTypes) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.childContainer, props.childStyles]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth,
    height: screenHeight,
  },
  childContainer: {
    flex: 1,
    padding: DIMENSIONS.padding,
  },
});

export default UIContainer;
