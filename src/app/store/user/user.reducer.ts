import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/domain/models/user';
import { UserApiActions } from './user.action';
import { UserState } from '../models/user';


export const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserApiActions.loadUsers, state => ({ ...state, loading: true })),
  on(UserApiActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(UserApiActions.loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
);



