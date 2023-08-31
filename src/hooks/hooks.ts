import { useAsyncValue } from "react-router-dom";
import { GameMoreInfo } from "../Types/types";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../Redux/store";
import { IParams } from "../Types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";

export const useGameInfo = () => useAsyncValue() as GameMoreInfo;
export const useFilterParams = () =>
    useSelector<RootState, IParams>((state) => state.gameListSlice.params);
export const useAppDispatch = () => useDispatch<AppDispatch>();