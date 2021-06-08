import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {
  setSeenPhrases,
  setCategories,
  setCurrentCategory,
  addNewSeenPhrase,
  addNewLearntPhrase,
  removeCorrectSeenPhrase,
  toggleThemeMode,
  switchLanguages,
  setLearntPhrases,
  removeWrongLearntPhrase,
} from '../redux/actions';
import {
  categoriesRoot,
  seenPhrasesRoot,
  currentCategory,
  currentCategoryIdRoot,
  categoryPhrasesRoot,
  currentCategoryName,
  themeModeRoot,
  nativeLanguageRoot,
  learntPhrasesRoot,
} from '../redux/selectors';
function mapStateToProps(state) {
  return {
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    seenPhrases: seenPhrasesRoot(state),
    learntPhrases: learntPhrasesRoot(state),
    categories: categoriesRoot(state),
    currentCategory: currentCategory(state),
    currentCategoryId: currentCategoryIdRoot(state),

    themeMode: themeModeRoot(state),

    nativeLanguage: nativeLanguageRoot(state),
  };
}
const mapDispatchToProps = {
  setSeenPhrases,
  setCategories,
  setCurrentCategory,
  addNewSeenPhrase,
  addNewLearntPhrase,
  removeCorrectSeenPhrase,
  toggleThemeMode,
  switchLanguages,
  setLearntPhrases,
  removeWrongLearntPhrase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
