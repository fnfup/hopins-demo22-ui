import * as _ from 'lodash';

/**
 * Given two filterItems property of SearchFilter, this
 * will append/overwrite the current set of filter items
 * with the values of the new one.
 */
export function appendFilterProps(newFilters: any, current: any) {
    Object.getOwnPropertyNames(newFilters).forEach((prop) => {
        if (Array.isArray(newFilters[prop])) {
            if (!current[prop]) {
                current[prop] = [];
            }
            current[prop] = updateFilterArray(newFilters[prop], current[prop]);
        } else {
            current[prop] = newFilters[prop];
        }
    });

    return current;
}

/**
 * Update the filters current filters array values by adding
 * values from the new filters array if they do not already
 * exist or removing them if they do
 * @param newFilters
 * @param currentFilters
 */
export function updateFilterArray(newFilters: any[], currentFilters: any[]) {
    newFilters.forEach((val) => {
        if (findIndexOf(currentFilters, val) < 0) {
            currentFilters.push(val);
        } else {
            const ind = currentFilters.indexOf(val);
            currentFilters.splice(ind, 1);
        }
    });
    return currentFilters;
}


/**
   * Will return the index of a given value in an array
   * using deep inspection equality checks. All property
   * valus must be the same.
   * @param arr
   * @param val
   */
 export const findIndexOf = (arr: any[], val: any): number => {
    if (val === null || val === undefined) return -1;
    if (typeof val !== 'object') return arr.indexOf(val);
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      if (_.isEqual(val, curr)) {
        return i;
      }
    }
    return -1;
  };

