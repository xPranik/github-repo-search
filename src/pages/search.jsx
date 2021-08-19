import React, { useEffect } from "react";
import ListRepositories from "../ui/blocks/ListRepositories/ListRepositories";
import PageWrapper from "../ui/base/PageWrapper/PageWrapper";
import SearchForm from "../ui/blocks/Search/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import SplashScreen from "../ui/blocks/SplashScreen/SplashScreen";
import { showSplashscreen } from "../store/actions/splashscreen";

const SearchPage = () => {
  const isSplashscreenShown = useSelector(
    (state) => state.splashscreen.isShown
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isSplashscreenShown) {
      setTimeout(() => {
        dispatch(showSplashscreen());
      }, 3000);
    }
  }, []);

  return (
    <PageWrapper>
      {!isSplashscreenShown && <SplashScreen />}
      <SearchForm />
      <ListRepositories />
    </PageWrapper>
  );
};

export default SearchPage;
