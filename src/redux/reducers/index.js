import {combineReducers} from 'redux';
// import all of constant case name for the switch
// in reducers
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_USER_PHRASES,
  SET_SEEN_PHRASES,
} from '../constants';

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

function seenPhrases(state = [], action) {
  switch (action.type) {
    case SET_SEEN_PHRASES:
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
});
