import { createAction } from '@ngrx/store';

export const increment = createAction('[Home Page] Increment');

export const decrement = createAction('[Home Page] Decrement');

export const reset = createAction('[Home Page] Reset');