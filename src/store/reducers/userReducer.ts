  interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
  }
  
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETH_USERS":
      return { loading: true, error: null, users: [] };
    default:
      return state;
  }
};
