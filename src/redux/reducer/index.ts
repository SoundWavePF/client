import { ActionType } from "../actions/types";

const initialState = {
  genres: [],
  album: {},
  adminOption:{home:true,user:false}
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.GET_MUSIC:
      return {
        ...state,
        genres: action.payload,
      };
      case ActionType.CHANGE_ADMIN_OPTION:
        return {
          ...state,
          adminOption: action.payload,
        };
    default:
      return state;
  }
};

export default Reducer;
