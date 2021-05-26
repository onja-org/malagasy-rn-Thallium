import React from 'react';
import ListItem from '../ListItem/ListItem';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {getStyle, LIST_STYLE} from '../../Theme/Theme';

export default function List({
  data,
  text,
  iconName,
  iconType,
  color,
  makeAction,
  lang,
  randomPhraseId,
  disableAllOptions,
  themeMode,
}) {
  return (
    <SafeAreaView>
      <View style={getStyle(LIST_STYLE, themeMode)}>
        <ListItem
          lang={lang}
          data={data}
          text={text}
          color={color}
          iconType={iconType}
          iconName={iconName}
          makeAction={makeAction}
          randomPhraseId={randomPhraseId}
          disableAllOptions={disableAllOptions}
          themeMode={themeMode}
        />
      </View>
    </SafeAreaView>
  );
}
