import { Rootstate } from "./../store/reducers/index";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<Rootstate> = useSelector;
