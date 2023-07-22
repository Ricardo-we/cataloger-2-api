import { createTheme, responsiveFontSizes } from "@mui/material";

export function MainTheme() {
    let MainTheme = createTheme({
    
    })
    MainTheme = responsiveFontSizes(MainTheme);
    
    return MainTheme;
}

// export MainTheme;
