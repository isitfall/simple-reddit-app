import React, { useEffect, useState, FormEvent, useCallback } from "react";
import { debounce } from "debounce";
import {
  enableLoading,
  disableLoading,
  setSearchResults,
  selectSearchResults,
  selectSearchLoading,
  fetchSearchResults,
} from "./store/reducers/search";
import {
  enableShowResults,
  disableShowResults,
  selectShowResultsSection,
} from "./store/reducers/layout";

import { BaseInput } from "./components/common/form/input/input";
import { AppLayout } from "./layout/app-layout/app-layout";
import "./style.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Container } from "./layout/container/container";
import { List } from "./components/list/list";
import { Loader } from "./components/common/loader/loader";

export const App = () => {
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector((state) => selectSearchResults(state));
  const searchLoading = useAppSelector((state) => selectSearchLoading(state));

  const [search, setSearch] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    const handler = debounce(
      (searchString: string) => dispatch(fetchSearchResults(searchString)),
      200,
    );

    handler(search);

    return () => {
      handler.clear();
    };
  }, [search, dispatch]);

  /* <Loader className="loader animate-spin" /> */
  return (
    <AppLayout
      showSection={searchResults.length > 0}
      headerChildren={
        <BaseInput
          id="search"
          placeholder="Put thread name..."
          className="min-w-[25%]"
          value={search}
          handleChange={handleChange}
          prefixIcon={
            searchLoading ? <Loader className="loader animate-spin" /> : undefined
          }
        />
      }
    >
      <Container>
        {searchResults.length > 0 ? <List items={searchResults} /> : <div />}
      </Container>
    </AppLayout>
  );
};
