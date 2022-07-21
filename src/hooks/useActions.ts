import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionsCreators } from "../store/actions";

export const useActions = () => {
  //в этом hook связываем все actions с dispatch
  const dispatch = useDispatch();
  return bindActionCreators(ActionsCreators, dispatch); // bindActionCreators - встроенная функция для связывания
};
