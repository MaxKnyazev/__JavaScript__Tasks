let initialState = { 
  count : 0,
  R : 0,
  G : 0,
  B : 0,
  W : 100,
  H : 100,
};

function reducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case "increase":
      return {...state, count: state.count + 1};

    case "decrease":
      return {...state, count: state.count - 1};

    case "addR":
      return {...state, R: state.R + action.value};

    case "addG":
      return {...state, G: state.G + action.value};

    case "addB":
      return {...state, B: state.B + action.value};

    case "addW":
      return {...state, W: state.W + action.value};

    case "addH":
      return {...state, H: state.H + action.value};

    default:
      return state;
  }
}

export default reducer;