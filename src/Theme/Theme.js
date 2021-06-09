import {StyleSheet} from 'react-native';

export const getStyle = (stylekey, theme) => {
  const styles = StyleSheet.create({
    [CONTAINER_STYLE]: {
      backgroundColor: theme === LIGHT_MODE ? '#E5E5E5' : '#1F232C',
      paddingHorizontal: 35,
      paddingVertical: 23,
      height: '100%',
    },
    [HEADER_STYLE]: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 56,
    },
    [HEADING_STYLE]: {
      paddingBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    [LIST_STYLE]: {
      backgroundColor: getFillColor(theme),
      borderWidth: 1,
      borderColor: theme === LIGHT_MODE ? '#FFFF' : '#111827',
      maxHeight: 370,
      marginBottom: 15,
    },
    [TOOL_BUTTON_CONTAINER_STYLE]: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      color: getFillColor(theme),
      width: 'auto',
      alignSelf: 'center',
      borderRadius: 100,
      backgroundColor: '#06B6D4',
      alignItems: 'center',
    },
    [TOOL_BUTTON_STYLE]: {
      margin: 13,
    },
    [SECTION_HEADING_TEXT_STYLE]: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 22,
      color: theme === LIGHT_MODE ? '#111827' : '#FFFF',
      paddingBottom: 15,
    },
    [LIST_ITEM_TEXT_STYLE]: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: 19,
      color: getTextColor(theme),
      maxWidth: 320,
    },
    [LIST_SEPARATOR_STYLE]: {
      flex: 1,
      height: 1,
      backgroundColor: theme === LIGHT_MODE ? '#E5E5E5' : '#1F232C',
    },
    [TEXTAREA_STYLE]: {
      fontFamily: 'Inter',
      color: getTextColor(theme),
      maxWidth: 360,
      marginHorizontal: 'auto',
      fontSize: 20,
      lineHeight: 24.3,
    },
    [INPUT_STYLE]: {
      color: theme === LIGHT_MODE ? '#111827' : '#FFF',
      lineHeight: 24.3,
    },
    [TEXT_TEXTAREA_CONTAINER_STYLE]: {
      height: 100,
      marginVertical: 0,
      marginHorizontal: 'auto',
      backgroundColor: theme === LIGHT_MODE ? '#FFF' : '#111827',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: '#E5E5E5',
    },
    [NEXT_BUTTON_CONTAINER_STYLE]: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      color: theme === LIGHT_MODE ? '#FFF' : '#111827',
      backgroundColor: '#06B6D4',
      alignSelf: 'center',
      borderRadius: 30,
      paddingHorizontal: 27,
      paddingVertical: 11,
      tintColor: 'red',
    },
    [DISABLED_BUTTON_STYLE]: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      alignSelf: 'center',
      textAlignVertical: 'center',
      borderWidth: 1,
      borderColor: theme === LIGHT_MODE ? '#06B6D4' : '#111827',
      backgroundColor: theme === LIGHT_MODE ? '#FFF' : '#111827',
      alignItems: 'center',
      borderRadius: 30,
      paddingHorizontal: 27,
      paddingVertical: 11,
    },
    [BUTTON_TEXT_COLOR_STYLE]: {
      color: theme === LIGHT_MODE ? '#FFF' : '#111827',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 19,
    },
    [BUTTON_DISABLED_TEXT_COLOR_STYLE]: {
      color: theme === LIGHT_MODE ? '#06B6D4' : '#FFF',
    },
    [DROPDOWN_PICKER_STYLE]: {
      height: '70%',
      backgroundColor: theme === LIGHT_MODE ? '#FFF' : '#111827',
    },
    [DROPDOWN_ROW_STYLE]: {
      borderBottomColor: theme === LIGHT_MODE ? '#E5E5E5' : '#1F232C',
      borderColor: theme === LIGHT_MODE ? '#E5E5E5' : '#1F232C',
      borderStyle: 'solid',
      borderWidth: 1,
    },
  });
  return styles[stylekey];
};

export const DARK_MODE = 'dark';

export const LIGHT_MODE = 'light';

export const toggleThemeMode = (setThemeMode, themeMode) => {
  const newMode = themeMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
  setThemeMode(newMode);
};

export const getFillColor = theme =>
  theme === LIGHT_MODE ? '#FFFF' : '#111827';

export const getTextColor = theme =>
  theme === LIGHT_MODE ? '#111827' : '#FFFF';

export const getPlaceholderTextColor = theme =>
  theme === LIGHT_MODE ? '#E5E5E5' : '#FFFF';

export const CONTAINER_STYLE = 'container';
export const HEADER_STYLE = 'header';
export const HEADING_STYLE = 'heading';
export const LIST_STYLE = 'list';
export const TOOL_BUTTON_CONTAINER_STYLE = 'toolButtonContainer';
export const TOOL_BUTTON_STYLE = 'toolButton';
export const SECTION_HEADING_TEXT_STYLE = 'sectionHeadingText';
export const LIST_ITEM_TEXT_STYLE = 'listItemText';
export const LIST_SEPARATOR_STYLE = 'listSeparator';
export const TEXTAREA_STYLE = 'textarea';
export const INPUT_STYLE = 'input';
export const TEXT_TEXTAREA_CONTAINER_STYLE = 'textTextareaContainer';
export const NEXT_BUTTON_CONTAINER_STYLE = 'nextButtonContainer';
export const DISABLED_BUTTON_STYLE = 'disabledButtonStyle';
export const BUTTON_TEXT_COLOR_STYLE = 'buttonTextColorStyle';
export const BUTTON_ADD_STYLE = 'buttonAddStyle';
export const BUTTON_DISABLED_TEXT_COLOR_STYLE = 'buttonDisabledTextColorStyle';
export const DROPDOWN_PICKER_STYLE = 'dropdownPickerStyle';
export const DROPDOWN_ROW_STYLE = 'dropdownTextStyle';
