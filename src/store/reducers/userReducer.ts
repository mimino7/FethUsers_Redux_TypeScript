import { UserState, UserAction, UsersActionTypes } from "../../types/users";  
  
  
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UsersActionTypes.FETH_USERS:
      return { loading: true, error: null, users: []};
    case UsersActionTypes.FETH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload};
    case UsersActionTypes.FETH_USERS_ERROR:
      return { loading: false, error: action.payload, users: []};
    default:
      return state;
  }
};
