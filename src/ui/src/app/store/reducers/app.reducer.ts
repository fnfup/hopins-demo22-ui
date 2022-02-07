import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { AppActions } from "../actions/app.actions";
import { IAppRootState, IAppState } from "../models/appstate.model";
import { initialState } from "./initial.state";


export const appDataReducer = createReducer<IAppState>(
    initialState,
    on(
        AppActions.UpdateLibrary,
        (state, { musicLibrary }) => ({ ...state, musicLibrary }) ),
    on(  AppActions.UpdateLibraryStatus,
        (state, { musicLibraryStatus }) => ({ ...state, musicLibraryStatus }) ),
    on( AppActions.UpdateMusicCatalog,
        (state, { musicCatalog }) => ({ ...state, musicCatalog }) ),
    on( AppActions.UpdateArtistList,
        (state, { artists }) => ({ ...state, artists }) ),
    on( AppActions.UpdateGenreList,
        (state, { genres }) => ({ ...state, genres }) ),
    on( AppActions.UpdateOrderHistory,
        (state, { userOrders }) => ({ ...state, userOrders }) ),
    on( AppActions.UpdateOrderStatus, 
        (state, { orderStatus }) => ({ ...state, orderStatus }) ),
    on( AppActions.UpdateOrderItems,
        (state, { orderCart }) => ({ ...state, orderCart }) ),
    on( AppActions.ClearOrderItems, 
        (state) => ({ ...state, orderCart: [] }) ),
);


export const reducerCore: ActionReducerMap<IAppRootState> = {
    router: routerReducer,
    data: appDataReducer
};

