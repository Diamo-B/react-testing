import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
    palette:{
        mode:"dark"
    }
})

const AppProviders = ({children}:{children:ReactNode}) => {
    return ( 
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
     );
}
 
export default AppProviders;