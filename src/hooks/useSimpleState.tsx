import { useState } from "react";


/***
 * Is the same as useState but simpler without a array destructure,
 * you can use it like a setter-getter object
*/
export function useSimpleState<T>(initialValue?: T | any){
    const [state, setState] = useState<T>(initialValue);

    return {
        set: setState,
        val: state
    }
}


export function useObject(initialValue: {[key: string]: any} = {}){
    const [data, setData] = useState(initialValue);

    return {
        set: setData, 
        value: data
    }
}