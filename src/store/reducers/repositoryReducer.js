import { repositoriesActionTypes } from "../../utils/consts";

const initState = {
  repository: {},
  loading: false,
  error: null,
};

export const repositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case repositoriesActionTypes.GET_REPOSITORIES_PENDING: {
      return { ...state, loading: true, error: null, repository: {} };
    }
    case repositoriesActionTypes.GET_REPOSITORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        repository: action.payload,
      };
    }
    case repositoriesActionTypes.GET_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, repositories: {} };
    default:
      return state;
  }
};
