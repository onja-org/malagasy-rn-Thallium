import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
} from 'react-native';

import {action} from '@storybook/addon-actions';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import SelectDropdown from 'react-native-select-dropdown';

import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import ToolBar from '../components/ToolBar/ToolBar';
import ToolButton from '../components/ToolButton/ToolButton';
import BackIcon from '../components/ToolButton/assets/back.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Textarea from '../components/Textarea/Textarea';
import Button from '../components/NextButton/NextButton';
import {generateId} from '../utils';
import DropdownArrowIcon from '../icons/select-dropdown-arrow.svg';

export default ({categories, navigation, addNewPhrase, nativeLanguage}) => {
  const [englishPhrase, setEnglishPhrase] = useState('');
  const [malagasyPhrase, setMalagasyPhrase] = useState('');
  const [selectedCategoryValue, setSelectedCategoryValue] = useState('');
  const dropdownRef = useRef({});

  const isButtonDisabled =
    englishPhrase === '' ||
    malagasyPhrase === '' ||
    selectedCategoryValue === '';

  const addPhrasesToCategory = () => {
    const newPhrase = {
      catId: selectedCategoryValue,
      id: generateId(),
      name: {
        en: englishPhrase,
        mg: malagasyPhrase,
      },
    };
    addNewPhrase(newPhrase);
    setEnglishPhrase('');
    setMalagasyPhrase('');
    dropdownRef.current.reset();
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          resetScrollToCoords={{x: 0, y: 0}}
          scrollEnabled={false}>
          <View style={{paddingHorizontal: 35, paddingVertical: 23}}>
            <View style={styles.header}>
              <ToolBar
                button={
                  <ToolButton
                    onPress={() => {
                      navigation.navigate('Home');
                    }}>
                    <BackIcon width={24} height={24} fill="#FFFFFF" />
                  </ToolButton>
                }
              />
              <ToolBar
                button={
                  <LanguageSwitcher
                    firstLanguage={nativeLanguage}
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
              <ToolBar
                button={
                  <ToolButton onPress={action('clicked-add-button')}>
                    <ModeIcon width={24} height={24} fill="#FFFFFF" />
                  </ToolButton>
                }
              />
            </View>
            <View style={styles.heading}>
              <SectionHeading text="Category: " />
              <SelectDropdown
                data={categories}
                ref={dropdownRef}
                defaultButtonText="Select Category"
                buttonTextStyle={{
                  color: isButtonDisabled ? '#06B6D4' : '#111827',
                  marginRight: -10,
                  marginTop: -2,
                  maxWidth: isButtonDisabled ? '43%' : '100%',
                  textAlign: 'left',
                }}
                dropdownIconPosition="right"
                dropdownStyle={styles.dropDownPicker}
                buttonStyle={[styles.pickerContainer]}
                renderDropdownIcon={isButtonDisabled ? WrappedIcon : null}
                onSelect={selectedItem =>
                  setSelectedCategoryValue(selectedItem.id)
                }
                buttonTextAfterSelection={selectedItem =>
                  selectedItem.name[nativeLanguage]
                }
                rowTextForSelection={item => item.name[nativeLanguage]}
              />
            </View>
            <View style={styles.englishField}>
              <View style={styles.inputHeading}>
                <SectionHeading text="The phrase in English: " />
              </View>
              <Textarea
                editable={true}
                phrase={englishPhrase}
                onChange={text => setEnglishPhrase(text)}
                placeholder="Enter here"
              />
            </View>
            <View style={styles.malagasyField}>
              <View style={styles.inputHeading}>
                <SectionHeading text="The phrase in Malagasy: " />
              </View>
              <Textarea
                editable={true}
                phrase={malagasyPhrase}
                onChange={text => setMalagasyPhrase(text)}
                placeholder="Enter here"
              />
            </View>
            <Button
              isDisabled={isButtonDisabled}
              textColor={isButtonDisabled ? '#06B6D4' : '#FFFFFF'}
              text="Add"
              onPress={addPhrasesToCategory}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const WrappedIcon = () => {
  return (
    <View style={{marginRight: 170}}>
      <DropdownArrowIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: 'transparent',
    marginRight: -15,
    flex: 1,
    alignItems: 'center',
  },
  dropDownPicker: {
    height: '70%',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 56,
  },
  heading: {
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputHeading: {
    paddingBottom: 15,
  },
  englishField: {
    paddingBottom: 20,
  },
  malagasyField: {
    paddingBottom: 60,
  },
});
