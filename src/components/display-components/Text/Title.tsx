import { FC, HTMLProps } from "react";

interface TitleProps extends HTMLProps<HTMLHeadingElement>{
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8"
}

const textSizeEquivalent = {
    "h1": "text-9xl",
    "h2": "text-8xl",
    "h3": "text-7xl",
    "h4": "text-6xl",
    "h5": "text-5xl",
    "h6": "text-4xl",
    "h7": "text-2xl",
    "h8": "text-xl",
}

const Title: FC<TitleProps> = ({variant, ...props}) => {
    if(Number(variant.split("")?.at(-1)) > 3) return <h4 className={textSizeEquivalent[variant] + " text-gray-900 "} {...props} />    
    return <h2 className={textSizeEquivalent[variant] + " text-gray-900 "} {...props}/>
}

export default Title;