import { MusicCatalogDto, SearchFilter } from "src/app/lib/models/catalog.models";
import { UserLibraryDto } from "src/app/lib/models/library.models";
import { UserOrdersDto } from "src/app/lib/models/order.models";

export interface IAppState{
    appliedFilters: SearchFilter;
    musicLibrary: UserLibraryDto;
    musicCatalog: MusicCatalogDto;
    userOrders: UserOrdersDto;
    orderStatus: string;
    orderCart: number[];
}
