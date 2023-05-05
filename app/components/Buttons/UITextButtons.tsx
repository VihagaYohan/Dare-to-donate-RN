import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';

// constants
import {COLORS, DIMENSIONS} from '../../constants';

// utils
import {normalizeFontSize} from '../../utils/helper';
import { FontFamily } from '../../utils/enums';

interface propTypes {
  lable: string;
  onPress: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
  labelStyle?: TextStyle | TextStyle[];
}

const UITextButton = ({
  lable,
  onPress,
  containerStyle,
  labelStyle,
}: propTypes) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => onPress()}>
      <Text style={[styles.labelStyle, labelStyle]}>{lable}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: DIMENSIONS.padding / 2,
  },
  labelStyle: {
    fontSize: normalizeFontSize(20),
    fontFamily:FontFamily.Regular,
    color: COLORS.grey.grey3,
  },
});

export default UITextButton;
