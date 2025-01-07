import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "./models/user";
import { userReducer } from "./user/user.reducer";


export interface AppState {
  user: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  user: userReducer,
};
