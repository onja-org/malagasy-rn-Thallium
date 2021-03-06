/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';

import {Text, View, SafeAreaView, KeyboardAvoidingView} from 'react-native';

import List from '../components/List/List';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolBar from '../components/ToolBar/ToolBar';
import Textarea from '../components/Textarea/Textarea';
import NextButton from '../components/NextButton/NextButton';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import BackIcon from '../components/ToolButton/assets/back.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';

import {getPhrasesForCategoryId, LANGUAGE_NAMES} from '../data/dataUtils';
import {shuffleArray} from '../utils';

import {
  getStyle,
  getFillColor,
  CONTAINER_STYLE,
  SECTION_HEADING_TEXT_STYLE,
  HEADER_STYLE,
  HEADING_STYLE,
} from '../Theme/Theme';
import {
  CATEGORY_HEADING,
  LANGUAGE_DATA,
  NEXT_BUTTON_TEXT,
  PHRASE_HEADING,
  PICK_BUTTON_TEXT,
  RESHUFFLE_BUTTON_TEXT,
  SEEN_PHRASES_HEADING,
  SHOULD_RESHUFFLE_TEXTAREA_CONTENT,
  SOLUTION_HEADING,
  LEARNT_PHRASES_HEADING,
} from '../translations';

import {LEARNT_PHRASES_ID, SEEN_PHRASES_ID} from '../redux/constants';

export default ({
  //nav provider
  navigation,
  categories,
  categoryPhrases,
  currentCategoryName,
  currentCategoryId,
  //actions
  setCurrentCategory,
  addNewSeenPhrase,
  addNewLearntPhrase,
  removeCorrectSeenPhrase,

  themeMode,
  toggleThemeMode,

  nativeLanguage,
  switchLanguages,
  removeWrongLearntPhrase,
}) => {
  const [originalPhrases, setOriginalPhrases] = useState([]);
  const [phrasesLeft, setPhrasesLeft] = useState([]);
  const [currentPhrase, setCurrentPhrase] = useState(null);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [disableAllOptions, setDisableAllOptions] = useState(false);
  const [shouldReshuffle, setShouldReshuffle] = useState(false);
  const [seenPhrasesCategory, setSeenPhrasesCategory] = useState(false);
  const [learntPhrasesCategory, setLearntPhrasesCategory] = useState(false);
  useEffect(() => {
    setOriginalPhrases(categoryPhrases);
    setNewQuestionPhrase(categoryPhrases, categoryPhrases);
  }, [categoryPhrases]);

  const setAnswerOptionsCallback = (original, current) => {
    const originWithoutCurrent = original.filter(phr => phr.id !== current.id);
    const randomFromAll = shuffleArray(originWithoutCurrent).slice(0, 3);
    const randomWithCorrect = shuffleArray([...randomFromAll, current]);
    setAnswerOptions(randomWithCorrect);
  };

  function setLearntAndSeenPhrasesAnswerOptions() {
    const currentCategory = categories.find(
      el =>
        el.phrasesIds.includes(currentPhrase?.id) ||
        el.id === currentPhrase?.catId,
    );
    if (seenPhrasesCategory || learntPhrasesCategory) {
      const phrasesForCategory = getPhrasesForCategoryId(currentCategory?.id);
      setAnswerOptionsCallback(phrasesForCategory, currentPhrase);
    }
  }

  const selectAnswerCallback = useCallback(
    item => {
      const itemId = item.id;
      if (itemId === currentPhrase.id) {
        addNewLearntPhrase(currentPhrase);
        removeCorrectSeenPhrase(currentPhrase);
      } else {
        addNewSeenPhrase(currentPhrase);
        removeWrongLearntPhrase(currentPhrase);
      }

      setDisableAllOptions(true);

      const answerOptionsWithSelected = answerOptions.map(phrase => {
        return {...phrase, isSelected: phrase.id === item.id};
      });

      setAnswerOptions(answerOptionsWithSelected);
    },
    [currentPhrase, setDisableAllOptions, answerOptions],
  );

  useEffect(() => {
    if (currentCategoryId === SEEN_PHRASES_ID) {
      setSeenPhrasesCategory(true);
    }

    if (currentCategoryId === LEARNT_PHRASES_ID) {
      setLearntPhrasesCategory(true);
    }
  }, [currentCategoryId]);

  useEffect(() => {
    const currentCategoryId = categories.find(
      el =>
        el.phrasesIds.includes(currentPhrase?.id) ||
        el.id === currentPhrase?.catId,
    );

    setCurrentCategory(currentCategoryId ? currentCategoryId.id : null);
  }, [currentPhrase]);

  const nextAnswerCallback = useCallback(() => {
    if (!Boolean(phrasesLeft.length)) {
      setShouldReshuffle(true);
      return;
    }
    setDisableAllOptions(false);
    const leftWithResetSelection = phrasesLeft.map(p => ({
      ...p,
      isSelected: false,
    }));

    setNewQuestionPhrase(originalPhrases, leftWithResetSelection);
  }, [phrasesLeft, originalPhrases]);

  const reshuffleCallback = useCallback(() => {
    setShouldReshuffle(false);
    setDisableAllOptions(false);
    setNewQuestionPhrase(originalPhrases, originalPhrases);
    //set set Learnt And Seen Phrases Answer Options after reshuffling
    if (seenPhrasesCategory || learntPhrasesCategory) {
      setLearntAndSeenPhrasesAnswerOptions();
    }
  }, [originalPhrases]);

  useEffect(() => {
    setLearntAndSeenPhrasesAnswerOptions();
  }, [currentPhrase]);

  const setNewQuestionPhrase = (originalAll, leftOriginal) => {
    const phrasesLeftOriginal = shuffleArray(leftOriginal);
    const phrasesLeftCopy = [...phrasesLeftOriginal];
    const newPhrase = phrasesLeftCopy.shift();
    setPhrasesLeft(phrasesLeftCopy);
    setCurrentPhrase(newPhrase);
    setAnswerOptionsCallback(originalAll, newPhrase);
  };

  const usedLanguage = nativeLanguage === LANGUAGE_NAMES.EN;
  const textareaLanguage = usedLanguage ? LANGUAGE_NAMES.MG : LANGUAGE_NAMES.EN;

  const categoryHeadingText = LANGUAGE_DATA[CATEGORY_HEADING][nativeLanguage];
  const phraseHeading = LANGUAGE_DATA[PHRASE_HEADING][nativeLanguage];
  const reshuffleButtonText =
    LANGUAGE_DATA[RESHUFFLE_BUTTON_TEXT][nativeLanguage];
  const nextButtonText = LANGUAGE_DATA[NEXT_BUTTON_TEXT][nativeLanguage];
  const solutionHeading = LANGUAGE_DATA[SOLUTION_HEADING][nativeLanguage];
  const shouldReshuffleTextareaContent =
    LANGUAGE_DATA[SHOULD_RESHUFFLE_TEXTAREA_CONTENT][nativeLanguage];
  const pickButtonText = LANGUAGE_DATA[PICK_BUTTON_TEXT][nativeLanguage];
  const seenPhrasesHeading =
    LANGUAGE_DATA[SEEN_PHRASES_HEADING][nativeLanguage];
  const learntPhrasesHeading =
    LANGUAGE_DATA[LEARNT_PHRASES_HEADING][nativeLanguage];

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        style={getStyle(CONTAINER_STYLE, themeMode)}>
        <View>
          <View style={getStyle(HEADER_STYLE, themeMode)}>
            <ToolBar
              button={
                <ToolButton
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <BackIcon
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
                  color={getFillColor(themeMode)}
                  iconType=""
                  iconName="swap-horiz"
                  firstLanguage={nativeLanguage}
                  LeftText={usedLanguage ? 'MA' : 'EN'}
                  RightText={usedLanguage ? 'EN' : 'MA'}
                  onPress={switchLanguages}
                  iconSize={24}
                />
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
          <View style={getStyle(HEADING_STYLE, themeMode)}>
            <SectionHeading text={categoryHeadingText} themeMode={themeMode} />
            <Text style={getStyle(SECTION_HEADING_TEXT_STYLE, themeMode)}>
              {seenPhrasesCategory
                ? `${seenPhrasesHeading} - ${currentCategoryName}`
                : learntPhrasesCategory
                ? `${learntPhrasesHeading} - ${currentCategoryName}`
                : currentCategoryName}
            </Text>
          </View>
          <View>
            <SectionHeading text={phraseHeading} themeMode={themeMode} />
          </View>
          <View style={{marginBottom: 37}}>
            <Textarea
              themeMode={themeMode}
              editable={false}
              phrase={
                shouldReshuffle
                  ? shouldReshuffleTextareaContent
                  : currentPhrase?.name?.[textareaLanguage]
              }
            />
          </View>
          {!shouldReshuffle && Boolean(answerOptions && answerOptions.length) && (
            <View>
              <View>
                <SectionHeading text={solutionHeading} themeMode={themeMode} />
              </View>
              <List
                lang={nativeLanguage}
                data={answerOptions}
                text={pickButtonText}
                color="#06B6D4"
                iconType="material-community"
                iconName="arrow-right"
                makeAction={selectAnswerCallback}
                randomPhraseId={currentPhrase.id}
                disableAllOptions={disableAllOptions}
                themeMode={themeMode}
              />
            </View>
          )}

          {disableAllOptions && !shouldReshuffle && (
            <View style={{marginTop: 45}}>
              <NextButton
                isDisabled={false}
                textColor="#FFFFFF"
                themeMode={themeMode}
                text={nextButtonText}
                onPress={nextAnswerCallback}
              />
            </View>
          )}
          {shouldReshuffle && (
            <View style={{marginTop: 45}}>
              <NextButton
                isDisabled={false}
                textColor="#FFFFFF"
                themeMode={themeMode}
                text={reshuffleButtonText}
                onPress={reshuffleCallback}
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
