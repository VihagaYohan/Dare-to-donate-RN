import React, {Component} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

// constants
import {COLORS, DIMENSIONS, STYLES} from '../constants';

const {screenWidth} = DIMENSIONS;

interface propTypes {
  data: any[];
  translateX: SharedValue<number>;
  index?: number;
  containerStyles?: ViewStyle | ViewStyle[];
  pageItemStyle?: ViewStyle | ViewStyle[];
}

const UIPagination = ({
  data,
  index,
  translateX,
  containerStyles,
  pageItemStyle,
}: propTypes) => {
  // ANIMATION
  const rPageStyle = (index: number) =>
    useAnimatedStyle(() => {
      const input: number[] = [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ];

      const colorOutput: string[] = [
        COLORS.grey.grey4,
        COLORS.primaryColor,
        COLORS.grey.grey4,
      ];
      const widthOutput: number[] = [10, 45, 10];

      const width = interpolate(
        translateX.value,
        input,
        widthOutput,
        Extrapolation.CLAMP,
      );

      const backgroundColor = interpolateColor(
        translateX.value,
        input,
        colorOutput,
      );

      return {
        width,
        backgroundColor,
      };
    });

  return (
    <View style={[STYLES.row, styles.container, containerStyles]}>
      {data.map((item, index) => {
        return (
          <Animated.View
            key={`pageItem-${index}`}
            style={[
              styles.pageItem,
              pageItemStyle,
              rPageStyle(index),
            ]}></Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: DIMENSIONS.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageItem: {
    width: 10,
    height: 10,
    borderRadius: DIMENSIONS.padding,
    backgroundColor: COLORS.grey.grey2,
    marginRight: DIMENSIONS.marginRight / 2,
  },
});

export default UIPagination;
