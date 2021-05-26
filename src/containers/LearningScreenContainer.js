import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {
  categoryPhrasesRoot,
  currentCategoryName,
  themeModeRoot,
} from '../redux/selectors';
import {setThemeMode} from '../redux/actions';

function mapStateToProps(state) {
  return {
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    themeMode: themeModeRoot(state),
  };
}
const mapDispatchToProps = {
  setThemeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
