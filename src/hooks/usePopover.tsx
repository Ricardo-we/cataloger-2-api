import { useState } from "react";

export function usePopover(){
    const [active, setActive] = useState<boolean>(false);
    const [anchorElement, setAnchorElement] = useState<any>(null);

    return {
        closePopover: () => setActive(false),
        openPopover: (e?: any) => {
            if(e && e.currentTarget) setAnchorElement(e.currentTarget);
            setActive(true);
        },
        active,
        anchorElement,
         setActive, 
        setAnchorElement
    }
}