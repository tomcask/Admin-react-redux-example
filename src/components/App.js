import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import Sidebar from './Sidebar';
import GiftsContainer from './GiftsContainer';

function mapStateToProps(state) {
  return {
    categories: state.categories,
    gifts: state.gifts,
    sidebar: Sidebar,
    main: GiftsContainer
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
