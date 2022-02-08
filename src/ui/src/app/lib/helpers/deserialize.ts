
/**
 * Uses JSON.stringify to clone and return
 * a deserialized copy of the object.
 *
 * ***You will lose any in memory refernces to other objects ***
 * @param obj
 */
 export const Deserialize = function (obj: any) {
    return JSON.parse(JSON.stringify(obj));
  };

  