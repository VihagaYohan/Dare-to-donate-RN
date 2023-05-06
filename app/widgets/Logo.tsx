import React, { Component } from 'react'
import {StyleSheet,View,Image, ViewStyle,ImageStyle,TextStyle} from 'react-native'

// components
import {UITextView} from '../components'

// constants
import {COLORS,DIMENSIONS,STYLES} from '../constants'
import { FontFamily } from '../utils/enums'


interface propTypes{
    parentStyle?:ViewStyle | ViewStyle[],
    logoStyle?:ImageStyle | ImageStyle[],
    titleStyle?:TextStyle | TextStyle[]
}

const Logo = ({parentStyle, logoStyle, titleStyle}:propTypes) => {
    return(
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={[styles.logo,logoStyle]}
          resizeMode="contain"
        />

        <View style={[STYLES.row, {width: '100%',justifyContent:'center'}]}>
          <UITextView text="Dare" textStyle={[styles.title,titleStyle ]} />
          <UITextView
            text="To"
            textStyle={[
              styles.title,
              {color: COLORS.grey.grey3, marginHorizontal: 5},
              titleStyle
            ]}
          />
          <UITextView text="Donate" textStyle={[styles.title, titleStyle]} />
        </View>
      </View>
    )
}

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
})

export default Logo