import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UsersActionTypes } from './../../types/users';


export const FetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => { // типизируем dispatch
      try {
        dispatch({type: UsersActionTypes.FETH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users') //логика запроса
        dispatch({type: UsersActionTypes.FETH_USERS_SUCCESS, payload: response.data})
      }
      catch (e) {
        dispatch({type: UsersActionTypes.FETH_USERS_ERROR, payload: "Ошибка загрузки"})
      }
    }
}