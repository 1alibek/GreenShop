import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootStore, DispatchType } from "../../redux/store";

// Custom hook for typed useSelector
export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;

// Custom hook for typed useDispatch
export const useReduxDispatch = () => useDispatch<DispatchType>();

