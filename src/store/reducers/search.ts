import { Response } from "./../../types/search-result";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseSearchItem } from "../../types/search-result";
import { mapSearchResponseToArray } from "../../utils/mapSearchResultToArray";
import { replaceStrSpaces } from "../../utils/replaceStrSpaces";
import { RootState } from "../store";

interface SearchSliceState {
  searchResults: BaseSearchItem[];
  loading: boolean;
}

const initialState: SearchSliceState = {
  searchResults: [],
  loading: false,
};

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (search: string): Promise<Response | never> => {
    try {
      const readableStream = await fetch(
        `https://www.reddit.com/r/${replaceStrSpaces(search)}.json?limit=9`,
      );
      const data = await readableStream.json();

      return data;
    } catch (e) {
      throw new Error("Something wents wrong...", { cause: e });
    }
  },
);

const setSearchResultsAction = (
  state: SearchSliceState,
  action: PayloadAction<BaseSearchItem[]>,
): void => {
  state.searchResults = [...action.payload];
};

const enableLoadingAction = (state: SearchSliceState) => {
  state.loading = true;
};

const disableLoadingAction = (state: SearchSliceState) => {
  state.loading = false;
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: setSearchResultsAction,
    enableLoading: enableLoadingAction,
    disableLoading: disableLoadingAction,
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchSearchResults.pending, (state: SearchSliceState) => {
      enableLoadingAction(state);
    });
    builder.addCase(
      fetchSearchResults.fulfilled,
      (state: SearchSliceState, { payload }: { payload: Response }) => {
        if (payload.error) {
          setSearchResultsAction(state, { payload: [], type: "" });
        } else {
          const mappedResponse = mapSearchResponseToArray(payload);

          setSearchResultsAction(state, { payload: mappedResponse, type: "" });
        }

        disableLoadingAction(state);
      },
    );
    builder.addCase(fetchSearchResults.rejected, (state: SearchSliceState) => {
      setSearchResultsAction(state, { payload: [], type: "" });
      disableLoadingAction(state);
    });
  },
});

export const { setSearchResults, enableLoading, disableLoading } = searchSlice.actions;

export const selectSearchResults = (state: RootState) => state.search.searchResults;
export const selectSearchLoading = (state: RootState) => state.search.loading;

export default searchSlice.reducer;
