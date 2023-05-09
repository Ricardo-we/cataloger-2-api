import { useEffect, useState } from "react";

import { safeJsonParse } from "../libs/utils/general";

export function useLocalStorage(storageKey: string, initialValue?: object | any){
    const [storedValue, setStoredValue] = useState<object | any>(initialValue);

    useEffect(() => {
        if(storageKey && window){
            setStoredValue(safeJsonParse(localStorage.getItem(storageKey)));
        }
    }, [storageKey])

    useEffect(() => {
        if(storedValue){
            localStorage.setItem(storageKey, JSON.stringify(storedValue));
        }
    }, [storedValue])

    return [storedValue, setStoredValue];
}