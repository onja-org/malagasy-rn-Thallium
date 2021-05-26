import {connect} from 'react-redux';
import Home from '../screens/Home';
import {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setThemeMode,
} from '../redux/actions';
import {
  categoriesRoot,
  nativeLanguageRoot,
  themeModeRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    themeMode: themeModeRoot(state),
  };
}
const mapDispatchToProps = {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setThemeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
