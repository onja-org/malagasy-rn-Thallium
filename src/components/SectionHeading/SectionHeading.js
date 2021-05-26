import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {getStyle, SECTION_HEADING_TEXT_STYLE} from '../../Theme/Theme';

export default function SectionHeading({text, themeMode}) {
  return (
    <SafeAreaView>
      <Text h2 style={getStyle(SECTION_HEADING_TEXT_STYLE, themeMode)}>
        {text}
      </Text>
    </SafeAreaView>
  );
}
