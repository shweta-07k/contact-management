import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DispatchType, RootType } from "../api/store";


export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector
export const useAppDispatch = () => useDispatch<DispatchType>()