export const repositoriesActionTypes = {
  FETCH_REPOSITORIES: "FETCH_REPOSITORIES",
  FETCH_REPOSITORIES_SUCCESS: "FETCH_REPOSITORIES_SUCCESS",
  FETCH_REPOSITORIES_ERROR: "FETCH_REPOSITORIES_ERROR",
  GET_REPOSITORIES_PENDING: "GET_REPOSITORIES_PENDING",
  GET_REPOSITORIES_SUCCESS: "GET_REPOSITORIES_SUCCESS",
  GET_REPOSITORIES_ERROR: "GET_REPOSITORIES_ERROR",
};
export const splashscreenActionType = {
  SET_SPLASHSCREEN_SHOWN: "SET_SPLASHSCREEN_SHOWN",
};

export const SEARCH_ROUTE = "/";
export const REPO_ROUTE = "/repository";

export const sortOptions = [
  {
    val: "best_match",
    placeholder: "Best match",
  },
  {
    val: "name asc",
    placeholder: "Name A-z",
  },
  {
    val: "name desc",
    placeholder: "Name Z-a",
  },
  {
    val: "stars desc",
    placeholder: "Stars to lower",
  },
  {
    val: "stars asc",
    placeholder: "Stars to higher",
  },
  {
    val: "updated desc",
    placeholder: "From new to old",
  },
  {
    val: "updated asc",
    placeholder: "From old to new",
  },
];
