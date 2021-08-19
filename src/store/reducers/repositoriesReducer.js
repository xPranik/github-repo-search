import { repositoriesActionTypes } from "../../utils/consts";

const initState = {
  repositories: [],
  repository: undefined,
  loading: false,
  error: null,
  page: 1,
  searchQuery: "",
  limit: 10,
  count: 0,
  query: "",
  sort: "",
  order: "",
};

export const repositoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case repositoriesActionTypes.FETCH_REPOSITORIES: {
      return {
        ...state,
        loading: true,
        error: null,
        repositories: [],
        count: 0,
        query: "",
      };
    }
    case repositoriesActionTypes.FETCH_REPOSITORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        repositories: action.payload.items,
        count: action.payload.total_count,
        query: action.query,
        page: action.page,
        sort: action.sort,
        order: action.order,
      };
    }
    case repositoriesActionTypes.FETCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        repositories: [],
        count: 0,
        query: "",
        page: 1,
        sort: "best_match",
        order: "desc",
      };
    default:
      return state;
  }
};
