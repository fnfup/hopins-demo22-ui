import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppRootState, IAppState } from "../models/appstate.model";

export const appStateSelector =
    createFeatureSelector<IAppState>("data");

export const selectAppliedFilters = createSelector(
    appStateSelector,
    state => state.appliedFilters
);

export const selectUserLibrary = createSelector(
    appStateSelector,
    state => state.musicLibrary
);

export const selectTrackLibraryStatus = createSelector(
    appStateSelector,
    state => state.musicLibraryStatus
);

export const selecMusicCatalog = createSelector(
    appStateSelector,
    state => state.musicCatalog
);

export const selectArtists = createSelector(
    appStateSelector,
    state => state.artists
);

export const selectGenres = createSelector(
    appStateSelector,
    state => state.genres
);

export const selectUserOrders = createSelector(
    appStateSelector,
    state => state.userOrders
);

export const selectOrderStatus = createSelector(
    appStateSelector,
    state => state.orderStatus
);

export const selectOrderCart = createSelector(
    appStateSelector,
    state => state.orderCart
);
