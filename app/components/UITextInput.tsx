import React, {Component, useState} from 'react';
import {StyleSheet, View, TextInput, ViewStyle, TextStyle} from 'react-native';

// components
import {UITextView} from './index';

// constants
import {STYLES, DIMENSIONS, COLORS} from '../constants';
import { FontFamily } from '../utils/enums';
import { normalizeFontSize } from '../utils/helper';

interface propTypes {
  placeholder: string;
  containerStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  icon?: JSX.Element | JSX.Element[];
  iconStyle?: ViewStyle | ViewStyle[];
}

const UITextInput = ({
  placeholder,
  containerStyle,
  textStyle,
  icon,
  iconStyle,
  ...props
}: propTypes) => {
  // init
  const [textValue, setTextValue] = useState<string>('');

  return (
    <View style={[STYLES.row, styles.container]}>
      {icon}

      <View style={styles.divider}/>

      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        value={textValue}
        onChangeText={text => setTextValue(text)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white.white2,
    paddingHorizontal: DIMENSIONS.padding * 2,
    borderRadius: DIMENSIONS.borderRadius / 2,
    alignItems:'center',
    marginBottom:DIMENSIONS.marginBottom
  },
  divider: {
    marginHorizontal: DIMENSIONS.margin,
    width: 1.2,
    height:'100%',
    backgroundColor: COLORS.grey.grey4,
  },
  inputStyle: {
    flex:1,
    paddingVertical:DIMENSIONS.padding *1.3,
    color:COLORS.grey.grey3,
    fontFamily:FontFamily.Regular,
    fontSize:normalizeFontSize(18)
  },
});

export default UITextInput;
