
export enum AppActionType {
    // actions that will be primarialy processed via the reducer
    UpdateLibrary = '[Library] update library data',
    UpdateLibraryStatus = '[Library] update library status',
    UpdateOrderHistory = '[Order] update order history data',
    UpdateOrderStatus = '[Order] update order status',
    UpdateOrderItems = '[Order] update order items for purchase',
    ClearOrderItems = '[Order] clear order items for purchase',
    UpdateMusicCatalog = '[Catalog] update music catalog data',
    UpdateArtistList = '[Catalog] update list of artists',
    UpdateGenreList = '[Catalog] update list of genres',
    
    // auth events 
    UpdateAuthEventStatus = '[Auth] update new auth event status',
    UpdateActiveUserDetails = '[Auth] update login user details',

    // actions that will be for effects only
    RequestUserLibrary = '[Library] request user library data',
    ToggleLibraryStatus = '[Library] toggle music track library status',
    RequestLibraryStatus = '[Library] request music track library status',
    RequestOrderHistory = '[Order] request order history data',
    SubmitOrder = '[Order] submit order',
    SearchMusicCatalog = '[Catalog] search music catalog',
    RequestAvailableArtists = '[Catalog] request available artists',
    RequestAvailableGenres = '[Catalog] request available genres',
}

