import * as React from "react";
import { Animated, StyleSheet, View, Pressable } from "react-native";

const DEFAULT_ACTIVE_COLOR = "rgba(255, 255, 255, 1)";
const DEFAULT_INACTIVE_COLOR = "rgba(255, 255, 255, 0.7)";

export class TabBarItem extends React.Component {
  getActiveOpacity = (position, routes, tabIndex) => {
    if (routes.length > 1) {
      const inputRange = routes.map((_, i) => i);

      return position.interpolate({
        inputRange,
        outputRange: inputRange.map((i) => (i === tabIndex ? 1 : 0)),
      });
    } else {
      return 1;
    }
  };

  getInactiveOpacity = (position, routes, tabIndex) => {
    if (routes.length > 1) {
      const inputRange = routes.map((_, i) => i);

      return position.interpolate({
        inputRange,
        outputRange: inputRange.map((i) => (i === tabIndex ? 0 : 1)),
      });
    } else {
      return 0;
    }
  };

  render() {
    const {
      route,
      position,
      navigationState,
      renderLabel: renderLabelCustom,
      getLabelText,
      getTestID,
      getAccessibilityLabel,
      getAccessible,
      activeColor: activeColorCustom,
      inactiveColor: inactiveColorCustom,
      pressColor,
      pressOpacity,
      labelStyle,
      style,
      onLayout,
      onPress,
      onLongPress,
    } = this.props;

    const tabIndex = navigationState.routes.indexOf(route);
    const isFocused = navigationState.index === tabIndex;

    const labelColorFromStyle = StyleSheet.flatten(labelStyle || {}).color;

    const activeColor =
      activeColorCustom !== undefined
        ? activeColorCustom
        : typeof labelColorFromStyle === "string"
        ? labelColorFromStyle
        : DEFAULT_ACTIVE_COLOR;
    const inactiveColor =
      inactiveColorCustom !== undefined
        ? inactiveColorCustom
        : typeof labelColorFromStyle === "string"
        ? labelColorFromStyle
        : DEFAULT_INACTIVE_COLOR;

    const activeOpacity = this.getActiveOpacity(
      position,
      navigationState.routes,
      tabIndex
    );
    const inactiveOpacity = this.getInactiveOpacity(
      position,
      navigationState.routes,
      tabIndex
    );

    const renderLabel = ({ route, color }) => {
      const labelText = getLabelText({ route });

      if (typeof labelText === "string") {
        return (
          <Animated.Text style={[styles.label, labelStyle, { color }]}>
            {labelText}
          </Animated.Text>
        );
      }

      return labelText;
    };

    const activeLabel = renderLabel({
      route,
      focused: true,
      color: activeColor,
    });
    const inactiveLabel = renderLabel({
      route,
      focused: false,
      color: inactiveColor,
    });

    const tabStyle = StyleSheet.flatten(style);
    const isWidthSet = tabStyle?.width !== undefined;
    const tabContainerStyle = isWidthSet ? null : { flex: 1 };

    const scene = { route };

    let accessibilityLabel = getAccessibilityLabel(scene);

    accessibilityLabel =
      typeof accessibilityLabel !== "undefined"
        ? accessibilityLabel
        : getLabelText(scene);

    const borderRadius = 16;
    const secondaryColor = "#E6CBB8";
    const tabExtraStyle =
      tabIndex == 0
        ? {
            backgroundColor: secondaryColor,
            borderBottomRightRadius: borderRadius,
          }
        : {
            backgroundColor: secondaryColor,
            borderBottomLeftRadius: borderRadius,
          };

    const label = (
      <View>
        <Animated.View
          style={[
            styles.item,
            tabStyle,
            tabExtraStyle,
            { opacity: inactiveOpacity },
          ]}
        >
          {inactiveLabel}
        </Animated.View>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.item,
            tabStyle,
            { opacity: activeOpacity },
          ]}
        >
          {activeLabel}
        </Animated.View>
      </View>
    );

    return (
      <Pressable
        testID={getTestID(scene)}
        accessible={getAccessible(scene)}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="tab"
        accessibilityState={{ selected: isFocused }}
        // @ts-ignore: this is to support older React Native versions
        accessibilityStates={isFocused ? ["selected"] : []}
        pressColor={pressColor}
        pressOpacity={pressOpacity}
        delayPressIn={0}
        onLayout={onLayout}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[styles.pressable, tabContainerStyle]}
      >
        <View pointerEvents="none">{label}</View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    margin: 4,
    backgroundColor: "transparent",
    textTransform: "uppercase",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    minHeight: 48,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  pressable: {
    // The label is not pressable on Windows
    // Adding backgroundColor: 'transparent' seems to fix it
    backgroundColor: "transparent",
  },
});
