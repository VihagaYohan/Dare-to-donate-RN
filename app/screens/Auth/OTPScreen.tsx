import React, {Component, useState} from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// components
import {UIContainer, UITextView, UIButton, UITextInput} from '../../components';

// constants
import {COLORS, DIMENSIONS, ICONS, STYLES} from '../../constants';
import {FontFamily} from '../../utils/enums';
import {normalizeFontSize} from '../../utils/helper';
import {RouteNames} from '../../navigation';

const {MaterialIcon} = ICONS;

const {screenWidth, screenHeight} = DIMENSIONS;

const OTPScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  // INIT
  const [seconds, setSeconds] = useState<number>(49);

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
          flex: 1,
        }}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <OTPInputView
          style={{width: '80%', height: 120}}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <View style={{width: '100%'}}>
          <UITextView
            text={`Resend code ${seconds} Sec`}
            textStyle={styles.resendToken}
          />
        </View>

        <UIButton
          label="Verify"
          onPress={() => console.log('register pressed')}
        />
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.backgroundColor,
    borderRadius: 10,
  },

  resendToken: {
    color: COLORS.primaryColor,
    fontFamily: FontFamily.Regular,
    textAlign: 'right',
    marginBottom: DIMENSIONS.marginBottom,
  },
});

export default OTPScreen;
