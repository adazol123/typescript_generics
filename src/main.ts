import "./style.css";
//Generic type

/**
 * This the basic of generic type
 * @param arr is an array of any type on initial state
 * @returns an array itself
 */
const last = <T>(arr: Array<T>) => {
  return arr;
};

/**
 * This is tha last Tuple
 * @param x argument 1 which accept any type of value
 * @param y argument 2 which accept any type of value
 * @returns [x, y] as tuple
 * */
const lastTuple = <X, Y = any>(x: X, y: Y): [X, Y] => {
  //return a tuple
  return [x, y];
};

const getLast = last(["dsad"]);
const getTuple = lastTuple(1, "dsadsa");

/**
 * Explicitly write a type
 */
const customType = lastTuple<string | null, number>(null, 4);

/**
 * Extending types
 * @param obj is required string type { firstname, lastname , ...rest}
 * @returns the fullname > firstName + lastName
 */
const fullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullname: obj.firstName + " " + obj.lastName,
  };
};

const generateFullName = fullName({
  firstName: "dany",
  lastName: "adazol",
  age: 12,
});