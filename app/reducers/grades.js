import data from '../data'
const initialState = data
const grades = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_DATA':
      return state.filter(dt => dt.id !== action.id)
    default:
      return state
  }
}

export default grades

