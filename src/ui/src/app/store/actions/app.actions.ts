import { createAction, props } from "@ngrx/store";
import { MusicArtist, MusicCatalogDto, MusicGenre, SearchFilter } from "src/app/lib/models/catalog.models";
import { LibraryStatusDto, UserLibraryDto } from "src/app/lib/models/library.models";
import { MusicOrderDto, OrderStatusEnum, UserOrdersDto } from "src/app/lib/models/order.models";
import { AppActionType } from "../enums/action.enums";

export namespace AppActions {
    // reducer actions
    export const UpdateLibrary = createAction(
        AppActionType.UpdateLibrary,
        props<{ musicLibrary: UserLibraryDto }>()
    );

    export const UpdateLibraryStatus = createAction(
        AppActionType.UpdateLibraryStatus,
        props<{ musicLibraryStatus: LibraryStatusDto[] }>()
    );

    export const UpdateOrderHistory = createAction(
        AppActionType.UpdateOrderHistory,
        props<{ userOrders: UserOrdersDto }>()
    );

    export const UpdateOrderStatus = createAction(
        AppActionType.UpdateLibraryStatus,
        props<{ orderStatus: OrderStatusEnum }>()
    );

    export const UpdateOrderItems = createAction(
        AppActionType.UpdateOrderItems,
        props<{ orderCart: number[] }>()
    );

    export const ClearOrderItems = createAction(
        AppActionType.UpdateLibraryStatus
    );

    export const UpdateMusicCatalog = createAction(
        AppActionType.UpdateMusicCatalog,
        props<{ musicCatalog: MusicCatalogDto }>()
    );

    export const UpdateArtistList = createAction(
        AppActionType.UpdateArtistList,
        props<{ artists: MusicArtist[] }>()
    );

    export const UpdateGenreList = createAction(
        AppActionType.UpdateGenreList,
        props<{ genres: MusicGenre[] }>()
    );

    // effect actions
    export const RequestUserLibrary = createAction(
        AppActionType.RequestUserLibrary,
        props<{ userId: number }>()
    );

    export const ToggleLibraryStatus = createAction(
        AppActionType.ToggleLibraryStatus,
        props<{ userLibraryId: number }>()
    );

    export const RequestOrderHistory = createAction(
        AppActionType.UpdateLibrary,
        props<{ userId: number }>()
    );

    export const SubmitOrder = createAction(
        AppActionType.UpdateLibraryStatus,
        props<{ payload: MusicOrderDto }>()
    );

    export const SearchMusicCatalog = createAction(
        AppActionType.UpdateOrderItems,
        props<{ filter: SearchFilter }>()
    );

    export const RequestAvailableArtists = createAction(
        AppActionType.RequestAvailableArtists
    );

    export const RequestAvailableGenres = createAction(
        AppActionType.RequestAvailableGenres
    );
}