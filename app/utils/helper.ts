import React, { Component } from 'react'
import {Dimensions,PixelRatio,Platform} from 'react-native'

const {width,height,fontScale} = Dimensions.get('screen')

// show console logs
export const showConsole = (content:any)=>{
    console.log(content)
}

// normalize sizes
export const RFSize = (size:number) => {
    return size
}

// normalize font size
export const normalizeFontSize = (fontSize:number)=>{
    const scale  = Dimensions.get('window').scale / 320 // iphone 5s
    const newSize = fontSize * (scale/2)

    if(Platform.OS == 'ios'){
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }else{
        return Math.round(PixelRatio.roundToNearestPixel(fontSize)-2)
    }
}

// isLandscape 
export const isLandscape = ()=>{
    return width > height
}

