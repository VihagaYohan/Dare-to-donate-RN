import React, {Component} from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UITextView, UIButton, UITextInput} from '../../components';

// constants
import {COLORS, DIMENSIONS, ICONS, STYLES} from '../../constants';
import {FontFamily} from '../../utils/enums';
import {normalizeFontSize} from '../../utils/helper';
import {RouteNames} from '../../navigation';

const {MaterialIcon} = ICONS;

const {screenWidth, screenHeight} = DIMENSIONS;

const ResetPassword = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  // ICONS
  const email = (
    <MaterialIcon
      name="mail-outline"
      size={24}
      color={COLORS.primaryColor}
      style={styles.iconStyle}
    />
  );
  return (
    <UIContainer>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flex:1
        }}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <UITextInput icon={email} placeholder='Enter email address'/>

        <UITextView
          text={`Your password reset will be send in you \n registered email address`}
          textStyle={styles.description}
        />

        <UIButton
          label="Send"
          onPress={() => console.log('register pressed')}
        />
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    paddingVertical: DIMENSIONS.padding / 2,
  },
  description: {
    textAlign: 'center',
    fontFamily: FontFamily.Medium,
    fontSize: 13,
    color: COLORS.grey.grey2,
    lineHeight: 20,
    marginTop: DIMENSIONS.margin * 2,
    marginBottom: DIMENSIONS.margin * 4,
  },
});

export default ResetPassword;
