import { ActionType } from "../actions/types";

const initialState = {
  genres: [],
  album: {},
  adminOption:{home:true,user:false},

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
    case ActionType.POST_SIGN_UP:
      console.log(action.payload) //hasta que no halla back solo consologea la info
      return{
        ...state
      }
    case ActionType.POST_LOGIN:
      console.log(action.payload) //hasta que no halla back solo consologea la info
      return{
        ...state
      }
    default:
      return state;
  }
};

export default Reducer;
