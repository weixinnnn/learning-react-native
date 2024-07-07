import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = 'blue';
const CIRCLE_HIGHLIGHT_COLOR = 'green';

const PanResponderScreen = () => {
  const circleRef = useRef<View>(null);
  const [numberActiveTouches, setNumberActiveTouches] = useState(0);
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [vx, setVx] = useState(0);
  const [vy, setVy] = useState(0);
  const [circleStyles, setCircleStyles] = useState({
    left: 20,
    top: 84,
    backgroundColor: CIRCLE_COLOR,
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => highlight(),
      onPanResponderMove: (event, gestureState) =>
        handlePanResponderMove(gestureState),
      onPanResponderRelease: (event, gestureState) =>
        handlePanResponderEnd(gestureState),
      onPanResponderTerminate: (event, gestureState) =>
        handlePanResponderEnd(gestureState),
    }),
  ).current;

  const highlight = () => {
    circleRef.current &&
      circleRef.current.setNativeProps({
        style: {backgroundColor: CIRCLE_HIGHLIGHT_COLOR},
      });
  };

  const unHighlight = () => {
    circleRef.current &&
      circleRef.current.setNativeProps({
        style: {backgroundColor: CIRCLE_COLOR},
      });
  };

  const updatePosition = useCallback(() => {
    circleRef.current &&
      circleRef.current.setNativeProps({style: circleStyles});
  }, [circleStyles]);

  const handlePanResponderMove = (gestureState: PanResponderGestureState) => {
    setDx(gestureState.dx);
    setDy(gestureState.dy);
    setVx(gestureState.vx);
    setVy(gestureState.vy);
    setNumberActiveTouches(gestureState.numberActiveTouches);

    const newLeft = circleStyles.left + gestureState.dx;
    const newTop = circleStyles.top + gestureState.dy;

    setCircleStyles(prevStyles => ({
      ...prevStyles,
      left: newLeft,
      top: newTop,
    }));

    updatePosition();
  };

  const handlePanResponderEnd = (gestureState: PanResponderGestureState) => {
    unHighlight();
    setCircleStyles(prevStyles => ({
      ...prevStyles,
      left: prevStyles.left + gestureState.dx,
      top: prevStyles.top + gestureState.dy,
    }));
  };

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  return (
    <View style={styles.container}>
      <View
        ref={circleRef}
        style={[styles.circle, circleStyles]}
        {...panResponder.panHandlers}
      />
      <Text>
        {numberActiveTouches} touches, dx: {dx}, dy: {dy}, vx: {vx}, vy: {vy}
      </Text>
    </View>
  );
};

export default PanResponderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
