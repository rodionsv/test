import { combineReducers } from 'redux';
import { historyReducer } from './history/reducer';

export const rootReducer = combineReducers({
    history: historyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
