import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// components
import {UIContainer, UITextView, UIButton, UITextInput} from '../../components';

// widgets
import {Logo} from '../../widgets';

// constants
import {COLORS, DIMENSIONS, STYLES, ICONS} from '../../constants';
import {normalizeFontSize} from '../../utils/helper';
import {FontFamily} from '../../utils/enums';
import {JumpingTransition} from 'react-native-reanimated';

const {MaterialIcon} = ICONS;

const LoginScreen = () => {
  // ICONS
  const email = (
    <MaterialIcon
      name="mail-outline"
      size={24}
      color={COLORS.primaryColor}
      style={styles.iconStyle}
    />
  );

  const password = (
    <MaterialIcon
      name="lock-outline"
      size={24}
      color={COLORS.primaryColor}
      style={styles.iconStyle}
    />
  );

  // RENDER UI
  const Footer = () => {
    return (
      <View style={[STYLES.row, {justifyContent: 'center'}]}>
        <UITextView
          text="Don't have an account ?"
          textStyle={[styles.footerTextStyle]}
        />
        <UITextView
          text="Register Now."
          textStyle={[
            styles.footerTextStyle,
            {color: COLORS.primaryColor, marginLeft: DIMENSIONS.marginLeft},
          ]}
        />
      </View>
    );
  };
  return (
    <UIContainer
      parentStyles={{backgroundColor: COLORS.white.white1}}
      childStyles={{backgroundColor: COLORS.white.white1}}
      footerView={Footer()}>
      <ScrollView>
        <Logo logoStyle={styles.logoStyle} titleStyle={styles.titleStyle} />

        <View style={{marginTop: DIMENSIONS.margin * 10}}>
          <UITextInput icon={email} placeholder="Enter email" />
          <UITextInput
            icon={password}
            placeholder="Enter password"
            secureTextEntry={true}
          />

          <UIButton
            label="LOG IN"
            onPress={() => console.log('log in')}
            parentStyle={{
              marginTop: DIMENSIONS.margin * 4,
              marginBottom: DIMENSIONS.margin,
            }}
          />

          <UITextView
            text="Forgot Password ?"
            textStyle={{
              color: COLORS.primaryColor,
              fontSize: normalizeFontSize(18),
              fontFamily: FontFamily.Regular,
              textAlign: 'center',
            }}
          />
        </View>
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    paddingVertical: DIMENSIONS.padding / 2,
  },
  logoStyle: {width: 60, height: 100, marginTop: DIMENSIONS.margin},
  titleStyle: {fontSize: 22},
  footerTextStyle: {
    fontFamily: FontFamily.Medium,
    fontSize: normalizeFontSize(18),
  },
});

export default LoginScreen;
