import {REPO_ROUTE, SEARCH_ROUTE} from "./utils/consts";
import Search from "./pages/search";
import RepositoryPage from "./pages/repository";

export const routes = [
    {
        path: REPO_ROUTE + '/:owner/:repo',
        Component: RepositoryPage,
    },
    {
        path: SEARCH_ROUTE,
        Component: Search,
    },
]