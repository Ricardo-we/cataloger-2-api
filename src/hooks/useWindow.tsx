import { useEffect, useState } from "react";

export function useWindow(){
    const [win, setWin] = useState<Window | any>();

    useEffect(() => {
        if(typeof window !== "undefined") setWin(window);
    }, [])
    
    return win;
}

export function useWindowSize(){
    const [winSizes, setWinSizes] = useState<{innerWidth: number, outerWidth: number, innerHeight: number, outerHeight: number}>({ innerHeight:0, innerWidth:0, outerWidth: 0, outerHeight: 0 });

    const handleWinResize = (win: any) => {
        return {
            innerWidth: win.innerWidth,
            innerHeight: win.innerHeight,
            outerHeight: win.outerHeight,
            outerWidth: win.outerWidth  
        }
    }

    useEffect(() => {
        setWinSizes(handleWinResize(window));
        
        window?.addEventListener("resize", () => {
            setWinSizes(handleWinResize(window))
        })

        return () => {
            window.removeEventListener("resize",()=>{})
        }
    }, [])
    
    return {...winSizes};
}