import { Observable, of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { SearchFilter } from "../models/catalog.models";
import { Deserialize } from "./deserialize";
import { appendFilterProps } from "./filter.helpers";


export function UpdateRequestFilters(src$: Observable<SearchFilter[]>) {
  return src$.pipe(
    mergeMap((filters: SearchFilter[]) => {
      const currentFilters = filters[1];
      const newFilters = filters[0];
      if (currentFilters) {

        // must do this because of ngrx
        const deserializedCurrentFilters = Deserialize(currentFilters);

        let filtersToReturn = appendFilterProps(
          newFilters, deserializedCurrentFilters);

        return of(<SearchFilter>filtersToReturn);
      }

      return of(<SearchFilter>Deserialize(newFilters));
    })
  );
}
