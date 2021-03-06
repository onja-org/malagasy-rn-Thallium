import {combineReducers} from 'redux';
import {LANGUAGE_NAMES} from '../../data/dataUtils';
// import all of constant case name for the switch
// in reducers
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_USER_PHRASES,
  SET_SEEN_PHRASES,
  SET_THEME_MODE,
  SWITCH_LANGUAGES,
  SET_LEARNT_PHRASES,
} from '../constants';

import {lightTheme} from '../../Theme/Theme';

// categories reducer
function categories(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

// categories reducer
function currentCategoryId(state = '', action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

// phrases reducer
function categoryPhrases(state = [], action) {
  switch (action.type) {
    case SET_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

function nativeLanguage(state = '', action) {
  switch (action.type) {
    case SET_LANGUAGE_NAME:
      return action.payload;
    case SWITCH_LANGUAGES:
      return state === LANGUAGE_NAMES.EN
        ? LANGUAGE_NAMES.MG
        : LANGUAGE_NAMES.EN;
    default:
      return state;
  }
}

// user phrases reducer
function userPhrases(state = [], action) {
  switch (action.type) {
    case SET_USER_PHRASES:
      return action.payload;
    default:
      return state;
  }
}
const initialState = {
  theme: lightTheme,
};

function seenPhrases(state = [], action) {
  switch (action.type) {
    case SET_SEEN_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

function themeMode(state = initialState, action) {
  switch (action.type) {
    case SET_THEME_MODE:
      return action.payload;
    default:
      return state;
  }
}
function learntPhrases(state = [], action) {
  switch (action.type) {
    case SET_LEARNT_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

// combine all of the reducers together
export default combineReducers({
  currentCategoryId,
  categories,
  categoryPhrases,
  nativeLanguage,
  userPhrases,
  seenPhrases,
  themeMode,
  learntPhrases,
});
