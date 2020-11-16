import { combineReducers } from 'redux';
import { historyReducer, HistorySate } from './history/reducer';
import { AppState, reducer } from './app/reducer';

export const rootReducer = combineReducers({
    app: reducer,
    history: historyReducer,
});

export type RootState = {
    app: AppState;
    history: HistorySate;
};
