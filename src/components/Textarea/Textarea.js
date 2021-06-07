// components/Task.js
import * as React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {
  getStyle,
  getPlaceholderTextColor,
  INPUT_STYLE,
  TEXTAREA_STYLE,
  TEXT_TEXTAREA_CONTAINER_STYLE,
} from '../../Theme/Theme';

export default function Example({
  phrase,
  editable,
  onChange = () => null,
  placeholder,
  themeMode,
}) {
  const textStyle = editable
    ? getStyle(INPUT_STYLE, themeMode)
    : getStyle(TEXTAREA_STYLE, themeMode);

  return (
    <SafeAreaView style={getStyle(TEXT_TEXTAREA_CONTAINER_STYLE, themeMode)}>
      <TextInput
        style={textStyle}
        value={phrase}
        editable={editable}
        onChangeText={onChange}
        multiline={true}
        placeholder={placeholder}
        placeholderTextColor={getPlaceholderTextColor(themeMode)}
      />
    </SafeAreaView>
  );
}
