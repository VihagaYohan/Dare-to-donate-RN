import React, { Component } from 'react'
import {Dimensions,PixelRatio,Platform} from 'react-native'

// constants
import {RFSize} from '../utils/helper'

const {width,height,fontScale} = Dimensions.get('screen')

const padding = RFSize(10)
const paddingTop = RFSize(10)
const paddingBottom  = RFSize(10)
const paddingLeft = RFSize(10)
const paddingRight = RFSize(10)
const margin = RFSize(10)
const marginTop = RFSize(10)
const marginBottom = RFSize(10)
const marginLeft = RFSize(10)
const marginRight = RFSize(10)
const borderRadius = RFSize(10)
const sectionTitle = RFSize(14)

export default {
    screenWidth:width,
    screenHeight:height,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    borderRadius,
    sectionTitle
}
