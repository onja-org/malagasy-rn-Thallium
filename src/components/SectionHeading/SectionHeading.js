import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {getStyle, SECTION_HEADING_TEXT_STYLE} from '../../Theme/Theme';

export default function SectionHeading({text, themeMode}) {
  return (
    <SafeAreaView>
      <Text style={getStyle(SECTION_HEADING_TEXT_STYLE, themeMode)}>
        {text}
      </Text>
    </SafeAreaView>
  );
}
