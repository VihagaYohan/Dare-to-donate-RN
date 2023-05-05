import React, { Component } from 'react'
import {StyleSheet,Text, ViewStyle, TextStyle} from 'react-native'

// constants
import {COLORS} from '../constants'

// utils
import {RFSize} from '../utils/helper'

interface propTypes{
    text:string,
    textStyle?:TextStyle | TextStyle[]
}

const UITextView = (props:propTypes) =>{
    return(
        <Text style={[styles.textStyle,props.textStyle]} {...props}>
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    textStyle:{
     fontSize: RFSize(12),
     color:COLORS.grey.grey1
    }
})

export default UITextView