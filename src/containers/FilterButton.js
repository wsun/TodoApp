import { connect } from 'react-redux';
import Button from '../components/Button';
import { setVisibilityFilter } from '../actions';

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter,
    title: ownProps.title,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onPress: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
}

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default FilterButton;
