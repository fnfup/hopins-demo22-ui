import { ActionReducer } from "@ngrx/store";
import { IAppState } from "../models/appstate.model";


export function debugReducer(
    reducer: ActionReducer<IAppState>
  ): ActionReducer<IAppState> {
    return function (state, action) {
      const newState = reducer(state, action);
      console.log(`[DEBUG] action: ${action.type}`, {
        payload: (<any>action).payload,
        oldState: state,
        newState
      });
      return newState;
    };
  }

  