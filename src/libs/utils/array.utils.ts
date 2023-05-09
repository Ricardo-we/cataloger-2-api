import { parseToDateOrNumber } from "./string.utils";
import { safeJsonParse } from "./general";

export function createFilter(filterBy: any, filter: any) {
  return (currentItem: any, index: number) => {
    const isSimilarText =
      typeof currentItem[filterBy] === "string" &&
      currentItem?.[filterBy]?.toLowerCase()?.includes(filter.toLowerCase());
    const isMoreThan =
      typeof currentItem?.[filterBy] === "number" &&
      currentItem?.[filterBy] >= currentItem?.[filterBy];

    return isSimilarText || isMoreThan;
  };
}

interface multipleAttributesFilterArgs {
  filterByAttributes: string[];
  filter: any;
  compareByBiggerNumber?: boolean;
  priority?: "number" | "string";
  lte?: number;
  mte?: number;
  minimumMatches?: number;
}

export function createMultipleAttributesFilter({
  minimumMatches = 1,
  filterByAttributes,
  filter,
  compareByBiggerNumber = false,
}: multipleAttributesFilterArgs) {
  return (item: any, index: number): boolean => {
    let matches = 0;
    for (const attrName of filterByAttributes) {
      const isString =
        typeof item[attrName] === "string" &&
        typeof filter[attrName] === "string";
      const isNumber =
        typeof item[attrName] === "number" &&
        typeof filter[attrName] === "number";
      const isSimilarText =
        isString &&
        item?.[attrName]
          ?.toLowerCase()
          ?.includes(filter[attrName].toLowerCase());
      const isMoreOrLessThan =
        isNumber && compareByBiggerNumber
          ? item?.[attrName] >= filter?.[attrName]
          : item?.[attrName] <= filter?.[attrName];

      if (!isSimilarText && !isMoreOrLessThan) continue;

      if (isSimilarText || isMoreOrLessThan) matches += 1;
    }
    return matches >= minimumMatches;
  };
}

export function createItemsSorter(sortBy: string, order: "asc" | "desc") {
  return (firstItem: any, secondItem: any) => {
    const orderingValue = order === "desc" ? -1 : 1;
    let a = firstItem[sortBy];
    let b = secondItem[sortBy];

    if (typeof a === "string" && typeof b === "string")
      return ("" + a).localeCompare(b) * orderingValue;
    if (typeof a === "string") a = parseToDateOrNumber(a);
    if (typeof b === "string") b = parseToDateOrNumber(b);

    return (a - b) * orderingValue;
  };
}

/***
 * Compare two arrays,
 * Made it to compare duplicate items
 */
export function doubleArrayDiscardFilter(
  newArray: any[],
  currentArray: any[],
  cb: (arr1Item?: any, arr2Item?: any) => boolean
) {
  return newArray?.filter(
    (arr1Item: any) =>
      currentArray.filter(arr2Item => cb(arr1Item, arr2Item)).length < 0
  );
}

export const unifiqueArray = (arr: any[], objKey?: string) =>
  arr.filter((item, index) => {
    return (
      index ===
      arr.findIndex(obj => {
        if (objKey) return obj?.[objKey] === item?.[objKey];
        return JSON.stringify(obj) === JSON.stringify(item);
      })
    );
  });

export const incrementativeJoin = (value: string[], joinBy: string = "/") => {
  let previousElement = "";
  const joinedValue = value.map((item, index) => {
    previousElement += `${index > 0 ? joinBy : ""}${item}`;
    return previousElement;
  });

  return joinedValue;
};

export const makeArrayOfNumbers = (
  arraySize: number,
  defaultNumber?: number
) => {
  if (!arraySize || arraySize <= 0) return [];
  const result = Array.from(Array(arraySize).keys());
  if (typeof defaultNumber !== "undefined")
    return result.map(item => defaultNumber);
  return result;
};
export const parseArrayNumber = (array: any[]) =>
  array.map(element => Number(element));

export function arrayToObject(array: any[], field: string): any {
  return array?.reduce((item, current) => {
    item[current[field]] = current;
    return item;
  }, {});
}

export function filterUniques(inputArray: any[], fieldName: string) {
  const nameCount: any = {};
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const obj = inputArray[i];
    if (!nameCount[obj[fieldName]]) {
      nameCount[obj[fieldName]] = 1;
    }
    if (nameCount[obj[fieldName]] === 1) {
      nameCount[obj[fieldName]]++;
      outputArray.push(obj);
    }
  }

  return outputArray;
}

export function filterByKey(array: any[], field: string, value: any): any[] {
  return array.filter(item => item[field] === value);
}

export function arrayOperate<T>(
  items: Array<T | any>,
  operationFunc?: (item: T, currentResult: number) => number
) {
  let result = 0;
  items?.forEach(item =>
    operationFunc ? (result = operationFunc(item, result)) : (result += item)
  );

  if (isNaN(result)) return 0;
  return result;
}

/***
 * Makes an array of a initial size with an initial value
 */
export function makeArrayOfAny(
  initialValue: any | ((index: number) => any),
  size: number
) {
  const result = [];
  for (let i = 0; i < size; i++)
    result.push(
      typeof initialValue === "function" ? initialValue(i) : initialValue
    );
  // if(size === 1) result.push(typeof initialValue === "function" ? initialValue(0) : initialValue);
  return result;
}

export function arrRemoveIndex(array: Array<any>, index: number) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i === index) continue;
    result.push(array[i]);
  }

  return result;
}

export const prevArrItem = (arr: Array<any>, index: number) =>
  index > 0 ? arr[index - 1] : arr[0];

/***
 * Returns the reversed array without mutating it
 */
export function inmutReverse(array: Array<any>) {
  const copy = structuredClone(array);
  return copy.reverse();
}

export function reverseFilter(
  array: Array<any>,
  cb: (item: any, index: number) => boolean
) {
  const result = [];

  for (let i = array?.length - 1; i >= 0; i--) {
    if (cb(array[i], i)) result.unshift(array[i]);
  }
  return result;
}

export function reverseFind<T>(
  array: Array<T>,
  cb: (item: T, index: number) => boolean,
  startFrom: number = array?.length - 1
) {
  for (let i = startFrom; i >= 0; i--) {
    if (cb(array[i], i)) return array[i];
  }
  return null;
}

export function reverseFindIndex<T>(
  array: Array<T>,
  cb: (item: T, index: number) => boolean,
  startFrom: number = array?.length - 1
) {
  for (let i = startFrom; i >= 0; i--) {
    if (cb(array[i], i)) return i;
  }

  return 0;
}
/***¨
 * return undefined or null to discard items
 */
function filterAndMap<T>(arr: T[], cb: (item: T, index: number) => any) {
  const result = [];

  for (let i = 0; i < arr?.length; i++) {
    const item = arr[i];
    const cbResult = cb(item, i);
    if (typeof cbResult === "undefined" || cbResult === null) continue;
    result.push(cbResult);
  }

  return result;
}

/*** @itemIndex is the index of the array you want to remove */
export function inmutSplice(
  array: any[],
  itemIndex: number,
  deleteCount: number = 1
) {
  const copy = [...array];
  copy.splice(itemIndex, deleteCount);
  return copy;
}

export function arrSatisfies<T>(
  array: T[],
  conditionCb: (item?: T, index?: number) => boolean
) {
  let arrSatisfiesCondition = true;

  for (let i = 0; i < array?.length; i++) {
    if (!conditionCb(array[i], i)) return false;
  }
  return true;
}

export function lastIndex(array: any[]) {
  return array?.length > 0 ? array?.length - 1 : 0;
}

export default filterAndMap;
