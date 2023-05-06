import React, {Component} from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';

// components
import {UIContainer, UITextView, UIButton} from '../../components';

// constants
import {COLORS, DIMENSIONS, STYLES} from '../../constants';
import {FontFamily} from '../../utils/enums';
import {normalizeFontSize} from '../../utils/helper';

const {screenWidth, screenHeight} = DIMENSIONS;

const WelcomeScreen = () => {
  return (
    <UIContainer>
      <ScrollView 
       contentContainerStyle={{
        justifyContent:'center',
        alignItems:'center'
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
          onPress={() => console.log('login pressed')}
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
