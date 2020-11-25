import { combineReducers } from 'redux';
import { historyReducer, HistoryState } from './history/reducer';
import { AppState, reducer } from './app/reducer';

export const rootReducer = combineReducers({
    app: reducer,
    history: historyReducer,
});

export type RootState = {
    app: AppState;
    history: HistoryState;
};
