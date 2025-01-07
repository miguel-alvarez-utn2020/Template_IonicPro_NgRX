import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { UserService } from '../../core/services/user.service';
import { UserApiActions } from './user.action';


export const loadUsers = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(UserApiActions.loadUsers),
      exhaustMap(() =>
        userService.getUsers().pipe(
          map((users) => UserApiActions.loadUsersSuccess({ users })),
          catchError((error: { message: string }) =>
            of(UserApiActions.loadUsersFailure({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
),

displayErrorAlert = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(UserApiActions.loadUsersFailure),
      tap(({ error }) => alert(error))
    );
  },
  { functional: true, dispatch: false }
)
