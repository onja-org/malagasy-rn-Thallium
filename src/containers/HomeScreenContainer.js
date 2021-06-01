import {connect} from 'react-redux';
import Home from '../screens/Home';
import {
  setCurrentCategory,
  setPhrases,
  setSeenPhrases,
  synchronizeStorageToRedux,
  toggleThemeMode,
  switchLanguages,
  setLearntPhrases,
  synchronizeGetAllCategories,
} from '../redux/actions';
import {
  categoriesRoot,
  nativeLanguageRoot,
  userPhrasesRoot,
  seenPhrasesRoot,
  learntPhrasesRoot,
  currentCategory,
  themeModeRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    userPhrases: userPhrasesRoot(state),
    seenPhrases: seenPhrasesRoot(state),
    learntPhrases: learntPhrasesRoot(state),
    currentCategory: currentCategory(state),
    themeMode: themeModeRoot(state),
  };
}
const mapDispatchToProps = {
  setCurrentCategory,
  setPhrases,
  setSeenPhrases,
  setLearntPhrases,
  synchronizeStorageToRedux,
  toggleThemeMode,
  switchLanguages,
  synchronizeGetAllCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
