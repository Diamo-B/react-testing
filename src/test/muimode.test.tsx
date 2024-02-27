import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { render } from "../test/customRenderFct/test-utils"
import MuiMode from "../components/Testing providers/Mui/muiMode";

describe('MuiMode', () => { 
    /* 
        ! explanation:
        + The MuiMode component renders the name of the theme mode.
        + The theme mode is light mode by default.
        + We changed it in the theme provider to be dark mode.
        ? so why it is failing. we are expecting dark mode but light mode is output instead.
        !!! Test env does not have Providers like the dev env 
    */
    it("renders text correctly",()=>{
        //! The ThemeProvider is rendered inside the <Test/> component not the <MuiMode/> component. Which means that the theme won't be changed to dark
        // !Error : render(<MuiMode/>) 
        //! To fix it, we need to use the wrapper option natively found within the options of the render method
        render(<MuiMode/>)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("dark mode")
    })
})