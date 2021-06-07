import {connect} from 'react-redux';
import {
  categoriesRoot,
  nativeLanguageRoot,
  themeModeRoot,
} from '../redux/selectors';
import Add from '../screens/Add';

import {addNewPhrase, switchLanguages, toggleThemeMode} from '../redux/actions';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    themeMode: themeModeRoot(state),
  };
}
const mapDispatchToProps = {
  addNewPhrase,
  toggleThemeMode,
  switchLanguages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
