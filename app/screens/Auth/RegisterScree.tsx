import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RouteProp} from '@react-navigation/native'

// components
import {UIContainer, UITextView, UIButton, UITextInput} from '../../components';

// widgets
import {Logo} from '../../widgets';

// constants
import {COLORS, DIMENSIONS, STYLES, ICONS} from '../../constants';
import {normalizeFontSize} from '../../utils/helper';
import {FontFamily} from '../../utils/enums';
import { RouteNames } from '../../navigation';

const {MaterialIcon, SimpleLineIcon, MaterialCommunityIcon} = ICONS;

const RegisterScreen = ({
  navigation,
  route
}:{
  navigation:NativeStackNavigationProp<any,any>,
  route:RouteProp<any,any>
}) => {
  // ICONS
  const user = (
    <SimpleLineIcon
      name="user"
      size={24}
      color={COLORS.primaryColor}
      style={styles.iconStyle}
    />
  );
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

  const phone = (
    <SimpleLineIcon
      name="user"
      size={24}
      color={COLORS.primaryColor}
      style={styles.iconStyle}
    />
  );

  const drop = (
    <SimpleLineIcon
      name="drop"
      size={24}
      color={COLORS.primaryColor}
      style={styles.iconStyle}
    />
  );

  const location = (
    <MaterialCommunityIcon
      name="map-marker-outline"
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
          text="Already have an account ?"
          textStyle={[styles.footerTextStyle]}
        />
        <UITextView
          text="Log in."
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo logoStyle={styles.logoStyle} titleStyle={styles.titleStyle} />

        <View style={{marginTop: DIMENSIONS.margin * 10}}>
          <UITextInput icon={user} placeholder="Enter name" />
          <UITextInput icon={email} placeholder="Enter email" />
          <UITextInput
            icon={password}
            placeholder="Enter password"
            secureTextEntry={true}
          />

          <UITextInput icon={phone} placeholder="Enter contact number" />

          <UITextInput
            icon={drop}
            placeholder="Enter blood group type. Ex: O+"
          />

          <UITextInput icon={location} placeholder="Enter location" />

          <UIButton
            label="REGISTER"
            onPress={() => navigation.navigate(RouteNames.AppAuth.ResetPassword)}
            parentStyle={{
              marginTop: DIMENSIONS.margin * 4,
              marginBottom: DIMENSIONS.margin,
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

export default RegisterScreen;
