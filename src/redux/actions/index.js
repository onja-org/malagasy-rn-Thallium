// // import all of the constants from contants folder
import {getData, NEW_PHRASES_KEY, storeData} from '../../utils/storage';
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_USER_PHRASES,
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

    return Promise.resolve();
  };
}

export function synchronizeStorageToRedux() {
  return async dispatch => {
    const storedPhrases = await getData(NEW_PHRASES_KEY);
    if (storedPhrases) {
      dispatch(setUserPhrases(storedPhrases));
    }
    return Promise.resolve();
  };
}
