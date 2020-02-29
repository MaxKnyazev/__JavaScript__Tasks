let initialState = {
  visible : false,
};

function reducer(state = initialState, action) {
  console.log('Reducer :');
  console.log(state);
  switch (action.type) {
    case 'ACTION_MOUSE_DOWN':
      return {...state, visible:!state.visible};

    default:
      return state;
  }
}

export default reducer;