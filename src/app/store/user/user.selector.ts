import { createSelector } from '@ngrx/store';
import { UserState } from '../models/user';
import { AppState } from '../app.state';

export const selectUserState = (state: AppState) => state.user;

export const selectUsers = createSelector(
    selectUserState,
    (state: UserState) => state.users
);

