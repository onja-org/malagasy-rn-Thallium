import {connect} from 'react-redux';
import {categoriesRoot, nativeLanguageRoot} from '../redux/selectors';
import Add from '../screens/Add';
import {addNewPhrase} from '../redux/actions';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
  };
}
const mapDispatchToProps = {
  addNewPhrase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
