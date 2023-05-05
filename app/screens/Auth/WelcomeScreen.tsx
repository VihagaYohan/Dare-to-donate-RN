import React, { Component } from 'react'
import {StyleSheet,} from 'react-native'

// components
import {UIContainer,UITextView} from '../../components'

// constants
import {COLORS,DIMENSIONS,STYLES} from '../../constants'

const {screenWidth,screenHeight} = DIMENSIONS

const WelcomeScreen = ()=>{
    return(
        <UIContainer>
            <UITextView text='welcome screen'/>
        </UIContainer>
    )
}

const styles = StyleSheet.create({

})

export default WelcomeScreen

