import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { Deserialize } from "src/app/lib/helpers/deserialize";
import { MusicCatalogDto, MusicTrack } from "src/app/lib/models/catalog.models";
import { LibraryStatusDto, LibraryStatusEnum, UserLibraryDto } from "src/app/lib/models/library.models";
import { RequestApiService } from "src/app/services/request.service";
import { AppActions } from "../actions/app.actions";
import { IAppState } from "../models/appstate.model";
import { selecMusicCatalog } from "../selectors/selectors";

@Injectable()
export class LibraryEffects {

    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private apiService: RequestApiService) { }

    
        requestUserLibrary$ = createEffect(() => this.actions$.pipe(
            ofType(AppActions.RequestUserLibrary),
            switchMap(action => this.apiService.getUserMusicLibrary(action.userId)),
            mergeMap(results => {
                return of(AppActions
                    .UpdateLibrary({ musicLibrary: <UserLibraryDto>results }));
            }),
            catchError((err, originalObs$) => {
                console.log(err);
                // this allows us to continue processing events
                return originalObs$
            })
        ), {dispatch: true});
        
    
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
            catchError((err, originalObs$) => {
                console.log(err);
                // this allows us to continue processing events
                return originalObs$
            })
        ), { dispatch: true });

        toggleLibraryStatus$ = createEffect(() => this.actions$
        .pipe(
            ofType(AppActions.ToggleLibraryStatus),
            switchMap(action => this.apiService.toggleLibraryStatus(action.userLibraryId)),
            catchError((err, originalObs$) => {
                console.log(err);
                // this allows us to continue processing events
                return originalObs$
            })
        ), { dispatch: false });
}
