
 export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
  }

 export enum UsersActionTypes {   //создаем перечисление, которое содержит все типы actions  
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
  export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
  