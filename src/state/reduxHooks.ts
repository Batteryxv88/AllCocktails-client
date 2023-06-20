import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch } from ".";
import { RootState } from './rootReducer';

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;