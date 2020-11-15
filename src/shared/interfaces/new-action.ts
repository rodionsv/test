import { Action } from 'redux';

export interface NewAction<T> extends Action {
    type: string;
    payload?: T;
}
