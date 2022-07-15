import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
})

export type Rootstate = ReturnType<typeof rootReducer>// с помощью ReturnType(встроенный) получаем тип  combineReducers и с его помощью сделаем свой HOOK, который будет работать с типизированным useSelector