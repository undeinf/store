import { StoreData, INITIAL_STORE_STATE } from './store-data';
import { UiState, INITIAL_UI_STATE } from './ui-state';
export interface ApplicationState{
    uiState:UiState,
    storeData:StoreData
}

export const INITIAL_APPLICAION_STATE:ApplicationState={
    uiState: INITIAL_UI_STATE,
    storeData: INITIAL_STORE_STATE,
}