import { combineReducers } from 'redux';
import grades from './grades';
import visibilityFilter from './visibilityFilter';

const gradeApp = combineReducers({
  grades,
  visibilityFilter
})

export default gradeApp;