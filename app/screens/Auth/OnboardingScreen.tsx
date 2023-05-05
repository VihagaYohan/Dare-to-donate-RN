import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ListRenderItem,
  Image,
} from 'react-native';
import Animated, {
  ColorSpace,
  useAnimatedScrollHandler,
  useAnimatedSensor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// components
import {
  UIContainer,
  UITextButton,
  UITextView,
  UIPagination,
} from '../../components';
import {COLORS, DIMENSIONS, STYLES} from '../../constants';
import {normalizeFontSize} from '../../utils/helper';
import {RouteNames} from '../../navigation';

interface onboardingTypes {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

const DATA: onboardingTypes[] = [
  {
    id: '0',
    imageUrl: require('../../assets/images/onboarding/image_1.png'),
    title: 'find blood donors',
    description:
      'elit. Cillum proident non sit commodo dolor.\n this is home description',
  },
  {
    id: '1',
    imageUrl: require('../../assets/images/onboarding/image_2.png'),
    title: 'post a blood request',
    description:
      'elit. Cillum proident non sit commodo dolor.\n this is home description',
  },
];

const OnboardingScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  // init values
  const translateX = useSharedValue<number>(0);
  const flatList = useRef();

  // EVENTS
  const _scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  const _scrollToNext = () => {
    if (DIMENSIONS.screenWidth - DIMENSIONS.padding * 2 == translateX.value) {
      flatList?.current?.scrollToIndex({animated: true, index: 1});
    } else {
      navigation.navigate(RouteNames.AppAuth.Welcome);
    }
  };

  // RENDER UI
  const RenderItem = (props: any) => {
    const {item, index} = props;
    return (
      <View>
        <Image
          source={item.imageUrl}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <UITextView text={item.title} textStyle={styles.title} />

          <UITextView text={item.description} textStyle={styles.description} />
        </View>
      </View>
    );
  };

  return (
    <UIContainer childStyles={{justifyContent: 'space-between'}}>
      <Animated.FlatList
        style={{
          flexGrow: 0,
        }}
        ref={flatList}
        data={DATA}
        keyExtractor={(_, index) => `onboarding-${index}`}
        onScroll={_scrollHandler}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />

      <UIPagination data={DATA} translateX={translateX} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <UITextButton
          lable="Skip"
          onPress={() => {
            _scrollToNext();
          }}
        />
        <UITextButton
          lable="Next"
          onPress={() => {
            _scrollToNext();
          }}
          labelStyle={styles.labelStyle}
        />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: DIMENSIONS.screenWidth - DIMENSIONS.padding * 2,
    height: 200,
    marginBottom: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: normalizeFontSize(24),
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: DIMENSIONS.padding * 4,
  },
  description: {
    textAlign: 'center',
    fontSize: normalizeFontSize(20),
    color: COLORS.grey.grey1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  labelStyle: {
    color: COLORS.primaryColor,
    fontSize: normalizeFontSize(20),
  },
});

export default OnboardingScreen;
