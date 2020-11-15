import { combineReducers } from 'redux';
import { historyReducer } from './history/reducer';
import { reducer } from './app/reducer';

export const rootReducer = combineReducers({
    app: reducer,
    history: historyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
