import React, { Component } from 'react'
import {StyleSheet,TextStyle,TouchableOpacity,View, ViewStyle} from 'react-native'

// constants
import {COLORS,STYLES,DIMENSIONS} from '../../constants'
import UITextView from '../UITextView'

// utils
import { FontFamily } from '../../utils/enums'
import { normalizeFontSize } from '../../utils/helper'

interface propTypes{
    label:string,
    onPress:()=>void,
    parentStyle?:ViewStyle | ViewStyle[],
    labelStyle?:TextStyle | TextStyle[],
    isPrimary?:boolean
}

const UIButton = ({label,onPress,parentStyle,labelStyle,isPrimary=true}:propTypes) => {
    return(
        <TouchableOpacity style={[styles.container, parentStyle, {
            backgroundColor:isPrimary ? COLORS.primaryColor : COLORS.white.white1,
            borderWidth:isPrimary ? 0 : 1.4,
            borderColor:isPrimary ? '' : COLORS.primaryColor
        }]} onPress={onPress}>
            <UITextView text={label} textStyle={[styles.labelStyle,labelStyle,{
                color:isPrimary ? COLORS.white.white1 : COLORS.primaryColor
            }]}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingVertical:DIMENSIONS.padding*1.5,
        paddingHorizontal:DIMENSIONS.padding/2,
        backgroundColor:COLORS.primaryColor,
        borderRadius:DIMENSIONS.borderRadius*10,
        justifyContent:'center',
        alignItems:'center'
    },
    labelStyle:{
        color:COLORS.white.white1,
        fontFamily:FontFamily.Medium,
        fontSize:normalizeFontSize(22)
    }
})

export default UIButton