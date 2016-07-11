import { connect } from 'react-redux'
import DataGrid from '../component/DataGrid'

const getVisibleData = (data, filter) => {
  switch (filter) {
    case 'SHOW_ALL': return data
    break;
    case 'SHOW_MEN': return data.filter(d => d.sex == '男')
    break;
    case 'SHOW_FEMALE': return data.filter(d => d.sex == '女')
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    contentData: getVisibleData(state.grades, state.visibilityFilter)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const VisibleDataGrid = connect(
  mapStateToProps

)(DataGrid)

export default VisibleDataGrid

//  mapDispatchToProps