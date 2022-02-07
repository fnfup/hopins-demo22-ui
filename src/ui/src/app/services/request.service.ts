
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { SearchFilter } from '../lib/models/catalog.models';
import { MusicOrderDto } from '../lib/models/order.models';

const apiHost = environment.requestApi + '/';

const endpoints = {
    userLib: "user/library/", // {userid} // get
    toggleStatus: "user/library/toggle/", //{trackid} put
    libStatus: "user/library/status",// post
    artists: "catalog/artist", // get
    genres: "catalog/genre", //get 
    catalog: "catalog", // post
    orders: "orders/", // {userid} get
    purchase: "orders/purchase" // post
}


@Injectable({
    providedIn: 'root'
})
export class RequestApiService {
    constructor(private http: HttpClient) { }

    getUserMusicLibrary(userId: number) {
        const url = apiHost + endpoints.userLib
            + '/' + userId;
        return this.http.get(url).pipe();
    }

    toggleLibraryStatus(trackId: number) {
        const url = apiHost + endpoints.userLib
            + '/' + trackId;
        return this.http.put(url, {}).pipe();
    }

    getLibraryStatus(trackIds: number[]) {
        const url = apiHost + endpoints.libStatus;
        return this.http.post(url, trackIds).pipe();
    }

    getArtists() {
        const url = apiHost + endpoints.artists;
        return this.http.get(url).pipe();
    }

    getGenres() {
        const url = apiHost + endpoints.genres;
        return this.http.get(url).pipe();
    }

    searchMusicCatalog(filter: SearchFilter) {
        const url = apiHost + endpoints.catalog;
        return this.http.post(url, filter).pipe();
    }

    getUserOrders(userId: number) {
        const url = apiHost + endpoints.orders
            + '/' + userId;
        return this.http.get(url).pipe();
    }

    submitOrderRequest(order: MusicOrderDto) {
        const url = apiHost + endpoints.purchase;
        return this.http.post(url, order).pipe();
    }

}


