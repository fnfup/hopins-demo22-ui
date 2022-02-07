import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { Deserialize } from "src/app/lib/helpers/deserialize";
import { UpdateRequestFilters } from "src/app/lib/helpers/filter.operator";
import { MusicCatalogDto, MusicTrack } from "src/app/lib/models/catalog.models";
import { LibraryStatusDto, LibraryStatusEnum, LibraryStatusRequestDto } from "src/app/lib/models/library.models";
import { RequestApiService } from "src/app/services/request.service";
import { AppActions } from "../actions/app.actions";
import { IAppState } from "../models/appstate.model";
import { selecMusicCatalog, selectAppliedFilters } from "../selectors/selectors";


@Injectable()
export class CatalogEffects {

    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private apiService: RequestApiService) { }

    searchCatalogEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(AppActions.SearchMusicCatalog),
            map(action => action.filter),
            withLatestFrom(this.store.pipe(select(selectAppliedFilters))),
            UpdateRequestFilters,
            switchMap(filters => this.apiService.searchMusicCatalog(filters)),
            mergeMap(results => {
                const trackIds = (<MusicCatalogDto>results)
                    .music.map(t => t.id);

                let request: LibraryStatusRequestDto = {
                    userId: 2,
                    trackIds: trackIds
                };

                return [
                    AppActions.UpdateMusicCatalog({ musicCatalog: (<MusicCatalogDto>results) }),
                    AppActions.RequestLibraryStatus({ request: request })
                ]
            }),
            catchError(err => EMPTY)
        ), { dispatch: true });


    libraryStatusEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(AppActions.RequestLibraryStatus),
            switchMap(action => this.apiService.getLibraryStatus(action.request)),
            withLatestFrom(this.store.select(selecMusicCatalog)),
            mergeMap(returnTuple => {

                let results = returnTuple[0] as LibraryStatusDto[];
                let catalog = returnTuple[1] as MusicCatalogDto;

                let updatedTracks = catalog?.music.map(entry => {
                    let match = results.find(
                        status => entry.id == status.trackId);

                    let updateValue = Deserialize(entry) as MusicTrack;

                    if (match) {
                        updateValue.status = match.status as LibraryStatusEnum;
                    }

                    return updateValue;
                });

                let update = Deserialize(catalog) as MusicCatalogDto;
                if (updatedTracks) { update.music = updatedTracks };

                return of(
                    AppActions.UpdateMusicCatalog({ musicCatalog: update }));
            }),
            catchError(err => EMPTY)
        ), { dispatch: true });


    toggleLibraryStatus$ = createEffect(() => this.actions$
        .pipe(
            ofType(AppActions.ToggleLibraryStatus),
            switchMap(action => this.apiService.toggleLibraryStatus(action.userLibraryId)),
            catchError(err => EMPTY)
        ), { dispatch: false });

}