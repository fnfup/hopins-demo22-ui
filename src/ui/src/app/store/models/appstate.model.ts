import { RouterReducerState } from "@ngrx/router-store";
import { MusicArtist, MusicCatalogDto, MusicGenre, SearchFilter } from "src/app/lib/models/catalog.models";
import { LibraryStatusDto, UserLibraryDto } from "src/app/lib/models/library.models";
import { OrderStatusEnum, UserOrdersDto } from "src/app/lib/models/order.models";

export interface IAppRootState{
    router: RouterReducerState<any>;
    data: IAppState;
}

export interface IAppState {
    appliedFilters: SearchFilter;
    musicLibrary?: UserLibraryDto;
    musicLibraryStatus: LibraryStatusDto[];
    musicCatalog?: MusicCatalogDto;
    artists: MusicArtist[];
    genres: MusicGenre[];
    userOrders?: UserOrdersDto;
    orderStatus: OrderStatusEnum;
    orderCart: number[];
}
