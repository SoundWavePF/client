import { ActionType } from "../actions/types";

const initialState = {
  genres: [],
  album: {},
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.GET_MUSIC:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
