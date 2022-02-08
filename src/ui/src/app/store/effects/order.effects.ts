import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { UserOrdersDto } from "src/app/lib/models/order.models";
import { RequestApiService } from "src/app/services/request.service";
import { AppActions } from "../actions/app.actions";
import { IAppState } from "../models/appstate.model";

@Injectable()
export class OrderEffects {

    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private apiService: RequestApiService) { }


    requestOrderHistory$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.RequestOrderHistory),
        switchMap(action => this.apiService.getUserOrders(action.userId)),
        mergeMap(results => {
            return of(AppActions
                .UpdateOrderHistory({ userOrders: <UserOrdersDto>results }));
        }),
        catchError((err, originalObs$) => {
            console.log(err);
            // this allows us to continue processing events
            return originalObs$
        })
    ), { dispatch: true });


    submitMusicOrder$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.SubmitOrder),
        switchMap(action => this.apiService.submitOrderRequest(action.payload)),
        catchError((err, originalObs$) => {
            console.log(err);
            // this allows us to continue processing events
            return originalObs$
        })
    ), { dispatch: false });

}
