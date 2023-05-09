import React, {Component, useState} from 'react';
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

const VerifyScreen = ({
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
        <Image
          source={require('../../assets/images/verify/success.png')}
          style={styles.imageStyle}
          resizeMode="contain"
        />

        <UIButton
          label="Finish"
          onPress={() => console.log('register pressed')}
        />
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 270,
    height: 230,
    marginBottom: DIMENSIONS.marginBottom * 5,
  },
});

export default VerifyScreen;
