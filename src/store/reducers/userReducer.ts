  
  const FETH_USERS = "FETH_USERS";
  const FETH_USERS_SUCCESS = "FETH_USERS_SUCCESS";
  const FETH_USERS_ERROR = "FETH_USERS_ERROR";
  
  
  interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
  }

  //у каждого action разный payload, поэтому создаем interface для каждого action
  interface FetchUsersAction {
    type: FETH_USERS;
  }
  interface FetchUsersSuccessAction {
    type: FETH_USERS;
    payload: any[];
  }
  interface FetchUsersErrorAction {
    type: FETH_USERS;
    payload: string;
  }
  
  
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case FETH_USERS:
      return { loading: true, error: null, users: []};
    case FETH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload};
    case FETH_USERS_ERROR:
      return { loading: false, error: action.payload, users: []};
    default:
      return state;
  }
};
