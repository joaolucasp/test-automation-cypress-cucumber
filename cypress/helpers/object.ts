export class ObjectHelper {
  public static compareObjects(obj1: object| undefined, obj2: object| undefined): boolean {
    if (obj1 === obj2) return true;

    // if they are not strictly equal, they both need to be Objects
    if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) return false;

    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (const prop in obj1) {
      if (typeof prop === 'string') {
        obj1[prop] = String(obj1[prop]).trim();
        obj2[prop] = String(obj2[prop]).trim();
      }

      // other properties were tested using x.constructor === y.constructor
      if (!obj1.hasOwnProperty(prop)) continue;

      // allows to compare x[ p ] and y[ p ] when set to undefined
      if (!obj2.hasOwnProperty(prop)) return false;

      // if they have the same strict value or identity then they are equal
      if (obj1[prop] === obj2[prop]) continue;

      // Numbers, Strings, Functions, Booleans must be strictly equal
      if (typeof obj1[prop] !== 'object') return false;

      // Objects and Arrays must be tested recursively
      if (!Object.is(obj1[prop], obj2[prop])) return false;
    }

    for (const prop in obj2) {
      // allows x[ p ] to be set to undefined
      if (obj2.hasOwnProperty(prop) && !obj1.hasOwnProperty(prop)) return false;
    }

    return true;
  }
}
