import React, {useEffect} from 'react';
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
import {
  LANGUAGE_DATA,
  LEARNT_PHRASES_HEADING,
  LEARN_BUTTON_TEXT,
  SEEN_PHRASES_HEADING,
  SELECT_CATEGORY_HEADING,
  WORDS_AND_PHRASES,
} from '../translations';

import {SEEN_PHRASES_ID, LEARNT_PHRASES_ID} from '../redux/constants';

export default ({
  //nav provider
  navigation,
  //state props
  categories,
  nativeLanguage,
  seenPhrases,
  themeMode,
  learntPhrases,
  //actions
  setCategories,
  setCurrentCategory,
  setPhrases,
  userPhrases,
  synchronizeStorageToRedux,
  toggleThemeMode,
  switchLanguages,
  getSeenPhrases,
}) => {
  useEffect(() => {
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

  const usedLanguage = nativeLanguage === LANGUAGE_NAMES.EN;

  const learntButtonText = LANGUAGE_DATA[LEARN_BUTTON_TEXT][nativeLanguage];
  const wordsAndPhrases = LANGUAGE_DATA[WORDS_AND_PHRASES][nativeLanguage];
  const selectCatgeoryHeading =
    LANGUAGE_DATA[SELECT_CATEGORY_HEADING][nativeLanguage];
  const seenPhrasesHeading =
    LANGUAGE_DATA[SEEN_PHRASES_HEADING][nativeLanguage];
  const learntPhrasesHeading =
    LANGUAGE_DATA[LEARNT_PHRASES_HEADING][nativeLanguage];
  const openLearntPhrases = item => {
    if (learntPhrases.length) {
      navigation.navigate('Learn');
      setPhrases(learntPhrases);
      setCurrentCategory(item.id);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
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
                  firstLanguage={nativeLanguage}
                  color={getFillColor(themeMode)}
                  LeftText={usedLanguage ? 'MA' : 'EN'}
                  RightText={usedLanguage ? 'EN' : 'MA'}
                  iconType=""
                  iconName="swap-horiz"
                  onPress={switchLanguages}
                  iconSize={24}
                />
              }
            />

            <ToolBar
              button={
                <ToolButton
                  onPress={() => openSeenPhrases({id: SEEN_PHRASES_ID})}>
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
                <ToolButton
                  onPress={() => openLearntPhrases({id: LEARNT_PHRASES_ID})}>
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
            <SectionHeading
              text={`${selectCatgeoryHeading}: `}
              themeMode={themeMode}
            />
          </View>
          <List
            lang={nativeLanguage}
            data={categories}
            text={learntButtonText}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openCategoryPhrases}
            themeMode={themeMode}
          />

          <View>
            <SectionHeading
              text={`${seenPhrasesHeading}: `}
              themeMode={themeMode}
            />
          </View>
          <List
            data={[
              {
                id: '###seen-phrases###',
                name: `${seenPhrases?.length} ${wordsAndPhrases}`,
              },
            ]}
            text={learntButtonText}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openSeenPhrases}
            themeMode={themeMode}
          />

          <View>
            <SectionHeading
              text={`${learntPhrasesHeading}: `}
              themeMode={themeMode}
            />
          </View>
          <List
            data={[
              {
                id: '###learnt-phrases###',
                name: `${learntPhrases?.length} ${wordsAndPhrases}`,
              },
            ]}
            text={learntButtonText}
            color="#06B6D4"
            iconType="material-community"
            themeMode={themeMode}
            iconName="arrow-right"
            makeAction={openLearntPhrases}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
