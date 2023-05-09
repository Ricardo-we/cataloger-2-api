import { boolean } from "yup";

export function objectFindNestedKey(object: object | any, keys: string) {
  try {
    let formattedKeys = keys.replace(/\./g, "?.");
    formattedKeys = formattedKeys
      .split("?.")
      .map(key => (key.includes("-") ? `["${key}"]` : key))
      .join("?.");

    return eval(`object?.${formattedKeys}`);
  } catch (err) {
    return keys;
  }
}

export function jsonToFormData(jsonData: object) {
  const formData = new FormData();

  Object.entries(jsonData).forEach(([key, value]) => {
    if (value?.name) return formData.append(key, value, value?.name);
    else return formData.append(key, value);
  });

  return formData;
}

export function makeDictFromArray(
  arrayOfObjects: any[],
  objectKeyName: string
) {
  // return arrayOfObjects?.map(item => ({...item}))
  const result: { [key: string]: any } = {};
  arrayOfObjects?.forEach(item => {
    result[item[objectKeyName]] = item;
  });
  return result;
}

// export function isEqualObj(obj1: { [key: string]: any }, obj2: { [key: string]: any }): boolean {
// 	if (Object.keys(obj1)?.length !== Object.keys(obj2)?.length) return false;
// 	let isEqual: boolean = true;
// 	const obj1Entries = Object.entries(obj1);

// 	for (const [key, value] of obj1Entries) {
// 		if (typeof value === "object" || typeof obj2[key] === "object")
// 			isEqual = isEqualObj(value, obj2[key]);
// 		else
// 			isEqual = value === obj2[key];

// 		if(!isEqual) return false;
// 	}

// 	return isEqual;
// }
