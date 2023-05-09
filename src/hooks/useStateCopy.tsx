import { useEffect, useState } from "react";

export function useStateCopy(copyValue: any){
    const [copy, setCopy] = useState(copyValue);

    useEffect(() => {
        setCopy(copyValue);
    }, [copyValue])

    return copy;
}