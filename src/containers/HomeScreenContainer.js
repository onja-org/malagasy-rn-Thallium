import {connect} from 'react-redux';
import Home from '../screens/Home';
import {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setSeenPhrases,
  synchronizeStorageToRedux,
  toggleThemeMode,
} from '../redux/actions';
import {
  categoriesRoot,
  nativeLanguageRoot,
  userPhrasesRoot,
  seenPhrasesRoot,
  currentCategory,
  themeModeRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    userPhrases: userPhrasesRoot(state),
    seenPhrases: seenPhrasesRoot(state),
    currentCategory: currentCategory(state),
    themeMode: themeModeRoot(state),
  };
}
const mapDispatchToProps = {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setSeenPhrases,
  synchronizeStorageToRedux,
  toggleThemeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
