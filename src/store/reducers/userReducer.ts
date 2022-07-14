  
  
  
  interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
  }

  enum UsersActionTypes {   //создаем перечисление, которое содержит все типы actions  
    FETH_USERS = "FETH_USERS",
    FETH_USERS_SUCCESS = "FETH_USERS_SUCCESS",
    FETH_USERS_ERROR = "FETH_USERS_ERROR",
  }

  //у каждого action разный payload, поэтому создаем interface для каждого action
  interface FetchUsersAction {
    type: UsersActionTypes.FETH_USERS;
  }
  interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETH_USERS_SUCCESS;
    payload: any[];
  }
  interface FetchUsersErrorAction {
    type: UsersActionTypes.FETH_USERS_ERROR;
    payload: string;
  }
  type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
  
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
