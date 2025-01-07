import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from 'src/app/domain/models/user';

/* const loadUsers = createAction('[Home Page] Load Users');
const loadUsersSuccess = createAction('[Home Page] Load Users Success', props<{ users: User[] }>());
const loadUsersFailure = createAction('[Home Page] Load Users Failure', props<{ error: string }>());
export const UserApiActions = {
    loadUsers,
    loadUsersSuccess,
    loadUsersFailure
}; */

export const UserApiActions = createActionGroup({
    source: 'User API',
    events: {
        loadUsers: emptyProps(),
        loadUsersSuccess: props<{ users: User[] }>(),
        loadUsersFailure: props<{ error: string }>(),
    }
});
