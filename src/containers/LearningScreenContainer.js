import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {
  setSeenPhrases,
  setCategories,
  setCurrentCategory,
  addNewSeenPhrase,
  removeCorrectSeenPhrase,
} from '../redux/actions';
import {
  categoriesRoot,
  categoryPhrasesRoot,
  currentCategoryName,
  seenPhrasesRoot,
  currentCategory,
  currentCategoryIdRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    seenPhrases: seenPhrasesRoot(state),
    categories: categoriesRoot(state),
    currentCategory: currentCategory(state),
    currentCategoryId: currentCategoryIdRoot(state),
  };
}
const mapDispatchToProps = {
  setSeenPhrases,
  setCategories,
  setCurrentCategory,
  addNewSeenPhrase,
  removeCorrectSeenPhrase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
