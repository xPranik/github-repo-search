import axios from "axios";
import { repositoriesActionTypes } from "../../utils/consts";

export const fetchRepositories = (query, limit = 10, page = 1, sort = 'best_match', order = 'desc') => {
  return async (dispatch) => {
    try {
      dispatch({ type: repositoriesActionTypes.FETCH_REPOSITORIES });
      const res = await axios.get(
        `https://api.github.com/search/repositories`,
        {
          params: {
            q: query,
            page,
            per_page: limit,
            sort,
            order,
          },
        }
      );
      dispatch({
        type: repositoriesActionTypes.FETCH_REPOSITORIES_SUCCESS,
        payload: res.data,
        query,
        page,
        sort,
        order,
      });
    } catch (e) {
      dispatch({
        type: repositoriesActionTypes.FETCH_REPOSITORIES_ERROR,
        payload: "Произошла ошибка при загрузке репозиториев",
      });
    }
  };
};

export const getRepository = (owner, repo) => {
  return async (dispatch) => {
    try {
      dispatch({ type: repositoriesActionTypes.GET_REPOSITORIES_PENDING });
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}`
      );
      dispatch({
        type: repositoriesActionTypes.GET_REPOSITORIES_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: repositoriesActionTypes.GET_REPOSITORIES_ERROR,
        payload: "Произошла ошибка при загрузке продукта",
      });
    }
  };
};
