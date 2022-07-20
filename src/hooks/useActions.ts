import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionsCreators from '../store/actions/user'

export const useActions = () => { //в этом hook связываем все actions с dispatch
  const dispatch = useDispatch();
  return bindActionCreators(UserActionsCreators, dispatch) // bindActionCreators - встроенная функция для связывания
}