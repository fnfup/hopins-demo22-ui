
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchFilter } from '../lib/models/catalog.models';
import { MusicOrderDto } from '../lib/models/order.models';
import { LibraryStatusRequestDto } from '../lib/models/library.models';

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

const httpPostOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class RequestApiService {
    constructor(private http: HttpClient) { }

    getUserMusicLibrary(userId: number) {
        const url = apiHost + endpoints.userLib + userId;
        return this.http.get(url).pipe();
    }

    toggleLibraryStatus(trackId: number) {
        const url = apiHost + endpoints.userLib + trackId;
        return this.http.put(url, {}).pipe();
    }

    getLibraryStatus(request: LibraryStatusRequestDto) {
        const url = apiHost + endpoints.libStatus;
        return this.http.post(url, request, httpPostOptions).pipe();
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
        return this.http.post(url, filter, httpPostOptions).pipe();
    }

    getUserOrders(userId: number) {
        const url = apiHost + endpoints.orders + userId;
        return this.http.get(url).pipe();
    }

    submitOrderRequest(order: MusicOrderDto) {
        const url = apiHost + endpoints.purchase;
        return this.http.post(url, order, httpPostOptions).pipe();
    }

}


