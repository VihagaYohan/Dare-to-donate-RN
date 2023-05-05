import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, ViewStyle} from 'react-native';

// constants
import {COLORS, DIMENSIONS} from '../../constants';

// utils
import {normalizeFontSize} from '../../utils/helper';

interface propTypes {
  lable: string;
  onPress: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
  labelStyle?: ViewStyle | ViewStyle[];
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
    color: COLORS.grey.grey3,
  },
});

export default UITextButton;
