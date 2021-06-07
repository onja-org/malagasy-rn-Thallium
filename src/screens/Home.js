import React, {useEffect} from 'react';
import {action} from '@storybook/addon-actions';
import {
  LANGUAGE_NAMES,
  getPhrasesForCategoryId,
  getAllCategories,
} from '../data/dataUtils';

import {View, SafeAreaView, KeyboardAvoidingView} from 'react-native';

import List from '../components/List/List';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolBar from '../components/ToolBar/ToolBar';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import AddIcon from '../components/ToolButton/assets/add.svg';
import CheckIcon from '../components/ToolButton/assets/check.svg';
import CheckAllIcon from '../components/ToolButton/assets/check-all.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';
import {
  getStyle,
  getFillColor,
  CONTAINER_STYLE,
  HEADER_STYLE,
} from '../Theme/Theme';

export default ({
  //nav provider
  navigation,
  //state props
  categories,
  nativeLanguage,
  seenPhrases,
  themeMode,
  //actions
  setCategories,
  setCurrentCategory,
  setPhrases,
  userPhrases,
  synchronizeStorageToRedux,
  toggleThemeMode,
}) => {
  useEffect(() => {
    synchronizeStorageToRedux();
    // fetch categories
    const categories = getAllCategories();
    setCategories(categories);
    synchronizeStorageToRedux();
  }, []);

  const openCategoryPhrases = item => {
    const categoryId = item.id;
    setCurrentCategory(categoryId);
    // fetch Phrases for category
    const phrasesForCategory = getPhrasesForCategoryId(categoryId);
    const userPhrasesForCategory = userPhrases.filter(
      phrase => phrase.catId === categoryId,
    );
    const combinedPhrasesForCategory = [
      ...phrasesForCategory,
      ...userPhrasesForCategory,
    ];
    setPhrases(combinedPhrasesForCategory);
    navigation.navigate('Learn');
  };

  const openNewTerms = () => {
    navigation.navigate('Add');
  };
  const openSeenPhrases = item => {
    if (seenPhrases.length) {
      navigation.navigate('Learn');
      setPhrases(seenPhrases);
      setCurrentCategory(item.id);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View>
          <View style={getStyle(HEADER_STYLE, themeMode)}>
            <ToolBar
              button={
                <ToolButton onPress={openNewTerms}>
                  <AddIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <LanguageSwitcher
                  firstLanguage={LANGUAGE_NAMES.EN}
                  LeftText="MA"
                  RightText="EN"
                  color="#FFFFFF"
                  iconType=""
                  iconName="swap-horiz"
                  onPress={() => null}
                  iconSize={24}
                />
              }
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        behavior="padding"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        style={getStyle(CONTAINER_STYLE, themeMode)}>
        <SafeAreaView>
          <View style={getStyle(HEADER_STYLE, themeMode)}>
            <ToolBar
              button={
                <ToolButton onPress={openNewTerms}>
                  <AddIcon
                    width={24}
                    height={24}
                    fill={getFillColor(themeMode)}
                  />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <LanguageSwitcher
                  firstLanguage={LANGUAGE_NAMES.EN}
                  LeftText="MA"
                  RightText="EN"
                  color={getFillColor(themeMode)}
                  iconType=""
                  iconName="swap-horiz"
                  onPress={() => null}
                  iconSize={24}
                />
              }
            />

            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <CheckIcon
                    width={24}
                    height={24}
                    fill={getFillColor(themeMode)}
                  />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <CheckAllIcon
                    width={24}
                    height={24}
                    fill={getFillColor(themeMode)}
                  />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={() => toggleThemeMode(themeMode)}>
                  <ModeIcon
                    width={24}
                    height={24}
                    fill={getFillColor(themeMode)}
                  />
                </ToolButton>
              }
            />
          </View>
          <View>
            <SectionHeading text="Select a category:" themeMode={themeMode} />
          </View>
          <List
            lang={nativeLanguage}
            data={categories}
            text={'Learn'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openCategoryPhrases}
            themeMode={themeMode}
          />
          <View>
            <SectionHeading themeMode={themeMode} text="Seen phrases:" />
          </View>
          <List
            data={[
              {
                id: '###seen-phrases###',
                name: `${seenPhrases?.length} words and phrases`,
              },
            ]}
            text={'Learn'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openSeenPhrases}
            themeMode={themeMode}
          />
          <View>
            <SectionHeading text="Learnt phrases:" themeMode={themeMode} />
          </View>
          <List
            data={[{id: 2, name: '10 words and phrases'}]}
            text={'Learn'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={() => {}}
            themeMode={themeMode}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
