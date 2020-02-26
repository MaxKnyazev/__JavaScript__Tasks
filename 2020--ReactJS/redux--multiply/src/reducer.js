function reducer(state, action) {
  if (state === undefined) {
    return { first: 0, second : 0 };
  }

  switch (action.type) {
    case "ADD_FIRST":
      return {...state, first: state.first + 1};
    case "ADD_SECOND":
      return {...state, second: state.second + 1};
    default:
     return state;
  }
}

export default reducer;