import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, Text} from 'react-native';
import {
  getStyle,
  NEXT_BUTTON_CONTAINER_STYLE,
  DISABLED_BUTTON_STYLE,
  BUTTON_TEXT_COLOR_STYLE,
  BUTTON_DISABLED_TEXT_COLOR_STYLE,
} from '../../Theme/Theme';

export default function Button({onPress, isDisabled, text, themeMode}) {
  return (
    <TouchableHighlight
      disabled={isDisabled}
      style={
        isDisabled
          ? getStyle(DISABLED_BUTTON_STYLE, themeMode)
          : getStyle(NEXT_BUTTON_CONTAINER_STYLE, themeMode)
      }
      underlayColor="#06D440"
      onPress={onPress}>
      <Text
        style={
          isDisabled
            ? getStyle(BUTTON_DISABLED_TEXT_COLOR_STYLE, themeMode)
            : getStyle(BUTTON_TEXT_COLOR_STYLE, themeMode)
        }>
        {text}
      </Text>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  onPress: () => {},
};

Button.propTypes = {
  onPress: PropTypes.func,
};
