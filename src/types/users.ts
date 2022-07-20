
 export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
  }

 export enum UsersActionTypes {   //создаем перечисление, которое содержит все типы actions  
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  }

  //у каждого action разный payload, поэтому создаем interface для каждого action
  interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
  }
  interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
  }
  interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
  }
  
  // связываем все Actions в один тип
  export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
   