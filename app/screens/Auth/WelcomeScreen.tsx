import React, {Component} from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UITextView, UIButton} from '../../components';

// constants
import {COLORS, DIMENSIONS, STYLES} from '../../constants';
import {FontFamily} from '../../utils/enums';
import {normalizeFontSize} from '../../utils/helper';
import { RouteNames } from '../../navigation';

const {screenWidth, screenHeight} = DIMENSIONS;

const WelcomeScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  return (
    <UIContainer>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={{flex: 1}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={[STYLES.row, {width: '100%'}]}>
            <UITextView text="Dare" textStyle={styles.title} />
            <UITextView
              text="To"
              textStyle={[
                styles.title,
                {color: COLORS.grey.grey3, marginHorizontal: 5},
              ]}
            />
            <UITextView text="Donate" textStyle={styles.title} />
          </View>
        </View>

        <UITextView
          text={`You can donate for ones in need and \n requesst blood if you need.`}
          textStyle={styles.description}
        />

        <UIButton
          label="Login"
          isPrimary={false}
          onPress={() => navigation.navigate(RouteNames.AppAuth.Login)}
          parentStyle={{marginBottom: 10}}
        />
        <UIButton
          label="Register"
          onPress={() => console.log('register pressed')}
        />
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 187,
  },
  title: {
    fontFamily: FontFamily.Medium,
    fontSize: 26,
    color: COLORS.primaryColor,
  },
  description: {
    textAlign: 'center',
    fontFamily: FontFamily.Medium,
    fontSize: 13,
    color: COLORS.grey.grey2,
    lineHeight: 30,
    marginTop: DIMENSIONS.margin * 2,
    marginBottom: DIMENSIONS.margin * 4,
  },
});

export default WelcomeScreen;
