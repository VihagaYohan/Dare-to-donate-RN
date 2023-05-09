import React, {Component} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs';

// navigation
import {RouteNames} from './index';

// auth screens
import {
  WelcomeScreen,
  OnboardingScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  OTPScreen,
  VerifyScreen,
} from '../screens/Auth';

// home screens
import {HomeScreen} from '../screens/Home';

// constants
import {COLORS} from '../constants';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  // DEFAULT NAVIGATION OPTIONS
  const defaultNavigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerShadowVisible: true,
    headerBlurEffect: 'light',
    headerTitleStyle: {
      color: COLORS.grey.grey2,
    },
    headerStyle: {
      backgroundColor: COLORS.backgroundColor,
    },
    headerTitle: '',
    animation: Platform.OS == 'ios' ? 'default' : 'slide_from_right',
  };

  const bottomNavigationOptions: BottomTabNavigationEventMap = {
    tabPress: {data: undefined, canPreventDefault: true},
    tabLongPress: {data: undefined},
  };

  // BOTTOM TABS
  const FeaturesStack = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const SearchStack = createNativeStackNavigator();
  const DonorStack = createNativeStackNavigator();
  const ReportStack = createNativeStackNavigator();
  const ProfileStack = createNativeStackNavigator();

  // ROOT BOTTOM NAVIGATOR
  const BottomTabs = () => {
    return (
      <FeaturesStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <FeaturesStack.Screen
          name={RouteNames.Home.Home}
          component={HomeScreen}
          options={bottomNavigationOptions}
        />

        <FeaturesStack.Screen
          name={RouteNames.Search.Search}
          component={HomeScreen}
          options={bottomNavigationOptions}
        />

        <FeaturesStack.Screen
          name={RouteNames.Request.Request}
          component={HomeScreen}
          options={bottomNavigationOptions}
        />

        <FeaturesStack.Screen
          name={RouteNames.Reports.Reports}
          component={HomeScreen}
          options={bottomNavigationOptions}
        />

        <FeaturesStack.Screen
          name={RouteNames.Profile.Profile}
          component={HomeScreen}
          options={bottomNavigationOptions}
        />
      </FeaturesStack.Navigator>
    );
  };

  return (
    <Stack.Navigator initialRouteName={RouteNames.AppAuth.Login}>
      <Stack.Screen
        name={RouteNames.AppAuth.Onboarding}
        component={OnboardingScreen}
        options={defaultNavigationOptions}
      />

      <Stack.Screen
        name={RouteNames.AppAuth.Welcome}
        component={WelcomeScreen}
        options={defaultNavigationOptions}
      />

      <Stack.Screen
        name={RouteNames.AppAuth.Login}
        component={LoginScreen}
        options={defaultNavigationOptions}
      />

      <Stack.Screen
        name={RouteNames.AppAuth.Register}
        component={RegisterScreen}
        options={defaultNavigationOptions}
      />

      <Stack.Screen
        name={RouteNames.AppAuth.ResetPassword}
        component={ResetPasswordScreen}
        options={defaultNavigationOptions}
      />

      <Stack.Screen
        name={RouteNames.AppAuth.OTP}
        component={OTPScreen}
        options={defaultNavigationOptions}
      />

      <Stack.Screen
        name={RouteNames.AppAuth.Verify}
        component={VerifyScreen}
        options={defaultNavigationOptions}
      />

      <Stack.Screen
        name={RouteNames.App}
        component={BottomTabs}
        options={defaultNavigationOptions}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
