const initialState = {
  stream: null,
  peers: [],
  messages: [],
  screenSharing: false,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STREAM":
      return { ...state, stream: action.payload };
    case "ADD_PEER":
      return { ...state, peers: [...state.peers, action.payload] };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "TOGGLE_SCREEN_SHARING":
      return { ...state, screenSharing: !state.screenSharing };
    default:
      return state;
  }
};

export default videoReducer;
