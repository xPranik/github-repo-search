import {combineReducers} from "redux";
import {repositoryReducer} from "./repositoryReducer";
import {repositoriesReducer} from "./repositoriesReducer";
import {splashscreenReducer} from "./splashscreenReducer";

export const rootReducer = combineReducers({
    repository: repositoryReducer,
    repositories: repositoriesReducer,
    splashscreen: splashscreenReducer,
})