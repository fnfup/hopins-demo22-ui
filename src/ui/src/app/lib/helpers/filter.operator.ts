import { mergeMap, of, pipe } from "rxjs";
import { SearchFilter } from "../models/catalog.models";
import { Deserialize } from "./deserialize";
import { appendFilterProps } from "./filter.helpers";


export const UpdateRequestFilters = () =>
pipe(
  mergeMap((filters: SearchFilter[]) => {
    const currentFilters = filters[1];
    const newFilters = filters[0];
    if (currentFilters) {
    
    // must do this because of ngrx
      const deserializedCurrentFilters = Deserialize(currentFilters);

      let filtersToReturn = appendFilterProps(
          newFilters, deserializedCurrentFilters);

      return of(filtersToReturn);
    }
    return of(Deserialize(newFilters));
  })
);
