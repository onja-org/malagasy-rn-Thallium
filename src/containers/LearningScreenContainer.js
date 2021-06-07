import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {
  setSeenPhrases,
  setCategories,
  setCurrentCategory,
  addNewSeenPhrase,
  removeCorrectSeenPhrase,
  toggleThemeMode,
} from '../redux/actions';
import {
  categoriesRoot,
  seenPhrasesRoot,
  currentCategory,
  currentCategoryIdRoot,
  categoryPhrasesRoot,
  currentCategoryName,
  themeModeRoot,
} from '../redux/selectors';
function mapStateToProps(state) {
  return {
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    seenPhrases: seenPhrasesRoot(state),
    categories: categoriesRoot(state),
    currentCategory: currentCategory(state),
    currentCategoryId: currentCategoryIdRoot(state),
    themeMode: themeModeRoot(state),
  };
}
const mapDispatchToProps = {
  setSeenPhrases,
  setCategories,
  setCurrentCategory,
  addNewSeenPhrase,
  removeCorrectSeenPhrase,
  toggleThemeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
