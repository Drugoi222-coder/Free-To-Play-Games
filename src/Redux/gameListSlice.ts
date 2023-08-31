import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { IParams, GameInfo, IGameList } from "../Types/types";
import { getRequestOptions } from "../utils/functions";

export const fetchGameList = createAsyncThunk<GameInfo[], IParams>(
    "gameListSlice/fetchGameList",
    async ({urlKey, ...args}) => {
        const options = getRequestOptions(args, urlKey!);
        const response = await axios.request(options);

        if (response.data.status === 0) {
            throw new Error("Нет игр по вашему запросу!");
        }
        return response.data;
    }
);

const gameListAdapter = createEntityAdapter<GameInfo>();
const initialState = gameListAdapter.getInitialState<IGameList>({
    isLoaded: "loading",
    params: {
        tag: [],
    },
});

const gameListSlice = createSlice({
    name: "gameListSlice",
    initialState,
    reducers: {
        setParams: (state, action: PayloadAction<IParams>) => {
            state.params = {
                ...state.params,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGameList.pending, (state) => {
                state.isLoaded = "loading";
            })
            .addCase(fetchGameList.fulfilled, (state, action) => {
                state.isLoaded = "loaded";
                gameListAdapter.setAll(state, action.payload);
            })
            .addCase(fetchGameList.rejected, (state) => {
                state.isLoaded = "error";
            });
    },
});

export const gameListSelectors = gameListAdapter.getSelectors<RootState>(
    (state) => state.gameListSlice
);
export const { setParams } = gameListSlice.actions;
export default gameListSlice.reducer;
