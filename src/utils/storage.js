import AsyncStorage from '@react-native-async-storage/async-storage';
export const NEW_PHRASES_KEY = '@malagasyApp/newPhrasesKey';
export const SEEN_PHRASES_KEY = '@malagasyApp/seenPhrasesKey';
export const LEARNT_PHRASES_KEY = '@malagasyApp/learntPhrasesKey';

export const storeData = async (itemKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(itemKey, jsonValue);
  } catch (e) {
    alert(e);
  }
};
export const getData = async itemKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(itemKey);
    return JSON.parse(jsonValue);
  } catch (e) {
    alert(e);
  }
};
