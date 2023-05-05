import React, { Component } from 'react'
import {StyleSheet,} from 'react-native'

// components
import {UIContainer,UITextView, UIButton} from '../../components'

// constants
import {COLORS,DIMENSIONS,STYLES} from '../../constants'

const {screenWidth,screenHeight} = DIMENSIONS

const WelcomeScreen = ()=>{
    return(
        <UIContainer>
            <UITextView text='welcome screen'/>
            <UIButton 
            label='Register' 
            onPress={()=>console.log('button pressed')}/>
        </UIContainer>
    )
}

const styles = StyleSheet.create({

})

export default WelcomeScreen

