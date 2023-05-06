import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// constants
import {DIMENSIONS, COLORS} from '../constants';

const {screenHeight, screenWidth} = DIMENSIONS;

interface propTypes {
  parentStyles?: ViewStyle | ViewStyle[];
  childStyles?: ViewStyle | ViewStyle[];
  children: JSX.Element | JSX.Element[];
  footerView?: JSX.Element | JSX.Element[];
}

const UIContainer = (props: propTypes) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.wrapper, props.parentStyles]}>
      <View style={[styles.childContainer, props.childStyles]}>
        {props.children}
      </View>

      {props.footerView && (
        <View style={[styles.footerView, {marginBottom: insets.bottom,}]}>
          {props.footerView}
        </View>
      )}
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
  footerView: {
    marginVertical: DIMENSIONS.margin,
  },
});

export default UIContainer;
