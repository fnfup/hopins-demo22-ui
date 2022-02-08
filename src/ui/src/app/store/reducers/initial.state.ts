import { IAppState } from "../models/appstate.model";
import { OrderStatusEnum } from "src/app/lib/models/order.models";

export const initialState: IAppState = {
    appliedFilters: {},
    musicLibrary: undefined,
    musicLibraryStatus: [],
    musicCatalog: undefined,
    artists: [],
    genres: [],
    userOrders: undefined,
    orderStatus: OrderStatusEnum.none,
    orderCart: [],
    authEvent: undefined
}
