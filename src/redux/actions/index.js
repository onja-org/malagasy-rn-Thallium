// // import all of the constants from contants folder
import {DARK_MODE, LIGHT_MODE} from '../../Theme/Theme';
import {
  getData,
  NEW_PHRASES_KEY,
  SEEN_PHRASES_KEY,
  storeData,
} from '../../utils/storage';

import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_USER_PHRASES,
  SET_SEEN_PHRASES,
  SET_THEME_MODE,
} from '../constants';

// categories actions
export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}

export function setCurrentCategory(categoryId) {
  return {
    type: SET_CURRENT_CATEGORY,
    payload: categoryId,
  };
}

export function setPhrases(phrases) {
  return {
    type: SET_PHRASES,
    payload: phrases,
  };
}

export function setLanguageName(language) {
  return {
    type: SET_LANGUAGE_NAME,
    payload: language,
  };
}

export function setUserPhrases(phrases) {
  return {
    type: SET_USER_PHRASES,
    payload: phrases,
  };
}

export function addNewPhrase(phrase) {
  return async dispatch => {
    const storedPhrases = await getData(NEW_PHRASES_KEY);
    // handle initial state
    let dataToStore = null;
    if (!storedPhrases) {
      dataToStore = [phrase];
    } else {
      dataToStore = [...storedPhrases, phrase];
    }
    await storeData(NEW_PHRASES_KEY, dataToStore);
    dispatch(setUserPhrases(dataToStore));
  };
}

export function setSeenPhrases(seenPhrases) {
  return {
    type: SET_SEEN_PHRASES,
    payload: seenPhrases,
  };
}

export function addNewSeenPhrase(phrase) {
  return async dispatch => {
    const storedSeenPhrases = await getData(SEEN_PHRASES_KEY);
    let dataToStore = null;
    if (!storedSeenPhrases) {
      dataToStore = [phrase];
    } else {
      dataToStore = [...storedSeenPhrases, phrase];
    }
    await storeData(SEEN_PHRASES_KEY, dataToStore);

    dispatch(setSeenPhrases(dataToStore));
    return Promise.resolve();
  };
}

export function removeCorrectSeenPhrase(phrase) {
  return async dispatch => {
    const storedSeenPhrases = await getData(SEEN_PHRASES_KEY);
    let dataToStore = storedSeenPhrases.filter(el => el.id !== phrase.id);
    await storeData(SEEN_PHRASES_KEY, dataToStore);

    dispatch(setSeenPhrases(dataToStore));
    return Promise.resolve();
  };
}

export function synchronizeStorageToRedux() {
  return async dispatch => {
    const storedPhrases = await getData(NEW_PHRASES_KEY);
    const storedSeenPhrases = await getData(SEEN_PHRASES_KEY);
    if (storedPhrases) {
      dispatch(setUserPhrases(storedPhrases));
    }
    if (storedSeenPhrases) {
      dispatch(setSeenPhrases(storedSeenPhrases));
    }
    return Promise.resolve();
  };
}

export function setThemeMode(theme) {
  return {
    type: SET_THEME_MODE,
    payload: theme,
  };
}

export const toggleThemeMode = themeMode => {
  const newMode = themeMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;

  return dispatch => {
    dispatch(setThemeMode(newMode));
    return Promise.resolve();
  };
};
