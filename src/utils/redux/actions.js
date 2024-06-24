export const setStream = (stream) => ({
  type: "SET_STREAM",
  payload: stream,
});

export const addPeer = (peer) => ({
  type: "ADD_PEER",
  payload: peer,
});

export const addMessage = (message) => ({
  type: "ADD_MESSAGE",
  payload: message,
});

export const toggleScreenSharing = () => ({
  type: "TOGGLE_SCREEN_SHARING",
});
