import { combineReducers } from "redux";
import { photoReducer } from "./photosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  photo: photoReducer,
});

export type Rootstate = ReturnType<typeof rootReducer>; // с помощью ReturnType(встроенный) получаем тип  combineReducers и с его помощью сделаем свой HOOK, который будет работать с типизированным useSelector
