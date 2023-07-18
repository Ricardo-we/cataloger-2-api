import { useState } from "react";

export function usePopover(){
    const [active, setActive] = useState<boolean>(false);
    const [anchorElement, setAnchorElement] = useState<any>(null);

    return {
        closePopover: () => setTimeout(() => setActive(false),10),
        openPopover: (e?: any) => {
            if(e && e.currentTarget) setAnchorElement(e.currentTarget);
            setActive(true);
        },
        togglePopover: (e?: any) => {
            if(e && e.currentTarget) setAnchorElement(e.currentTarget);
            setActive(prev => !prev);
        },
        active,
        anchorElement,
         setActive, 
        setAnchorElement
    }
}