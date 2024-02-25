/* 
    ! To test user interactions we use a companion library for the testing-library called user-event.
    * The user-event library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser exactly just lke a user interaction.
    + You need to install it using the `npm i @testing-library/user-event` CLI command
    ! All the user-event functions are asynchronous

    !! mouse most used convenience apis
    + The most common user events convenience apis are: click, dblClick, tripleCLick, hover, unhover ...

    !! keyboard most used apis
    => Convenience APIs:
        + tab() : used to press tab
        ...    
    => Utility APIs:
        + clear(): used to clear an editble element
        + type(element, text): used to type a value inside an element
        + selectOptions(): used to select element(s) in a select tag
        + deselectOptions(): used to deselect element(s) in a select tag
        + upload(): used to change a file input as if the user has clicked the "upload file" button and chose a new file.
        ...
    => Clipboard APIs:
        + copy(): to copy the current selection
        + cut(): to cut the current selection
        + paste(): to paste data into the document
    => Lower level keyboard APIs:
        + keyboard("hello") => presses the keys "h","e","l","l" and "o" respectively
        + keyboard("{Shift>}A{/Shift}") => holds the key shift ({Shift>}) then presses "A" then releases the shift key ({/Shift})
        ...
*/
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event";
import Counter from "../components/userInteractions/Counter"
import KeybdCounter from "../components/userInteractions/KeybdCounter";

describe("Testing user interactions",()=>{

    /* 
    ! Mouse events 
    */

    //* Renders correctly
    it("renders correctly",()=>{
        render(<Counter/>);
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    })
    
    //* Initial render state is 0
    it("renders a count of 0",()=>{
        render(<Counter/>)
        const count = screen.getByRole("heading");
        expect(count).toHaveTextContent("0");
    })

    //*user interactions testing
    it("renders a count of 1 after clcking the increment button",async ()=>{
        user.setup(); //? creates an instance of the user interaction entity 
        render(<Counter/>)
        const incrementBtn = screen.getByRole("button");
        await user.click(incrementBtn);
        const count = screen.getByRole("heading");
        expect(count).toHaveTextContent("1");
    })

    //*
    it("renders a count of 2 after clicking the increment btn twice",async ()=>{
        user.setup();
        render(<Counter/>);
        const incrementBtn = screen.getByRole("button",{
            name:/Increment/i
        })
        await user.click(incrementBtn);
        await user.click(incrementBtn);
        const count = screen.getByRole("heading");
        expect(count).toHaveTextContent("2");
    })

    /* 
    ! keyboard events 
    */
    it("renders a count of 10 after entering it into the input then clicking on the set button",async()=>{
        user.setup();
        render(<KeybdCounter/>);
        // + We need to enter the amount (10) in the input element
        // => First we need to find that input element
        const inputElement = screen.getByRole("spinbutton");
        // => Second, we check if the input is in the document
        expect(inputElement).toBeInTheDocument();
        // => Third, we need to enter a value of 10 into the input using the 'type' method of the user-event library
        await user.type(inputElement,"10"); 
        // => fourth, we check whether the 10 was actually typed using the "ToHaveValue" jest matcher
        expect(inputElement).toHaveValue(10);
        // => fifth, simulate a click event on the 'set' button
        const setBtn = screen.getByRole("button",{
            name:/set/i
        })
        // => Sixth, simulate a button click on the set button
        await user.click(setBtn)
        // => Seventh, get the count header
        const count = screen.getByRole("heading");
        // => Eighth, check whether the count is equal to 10
        expect(count).toHaveTextContent("10"); 
    })
    
    it("renders the focus order correctly", async ()=>{
        user.setup();
        render(<KeybdCounter/>);
        const incrementBtn = screen.getByRole("button",{
            name:"Increment"
        })
        const input = screen.getByRole("spinbutton");
        const setBtn = screen.getByRole("button",{
            name:"Set"
        })

        await user.tab()
        expect(incrementBtn).toHaveFocus()
        await user.tab()
        expect(input).toHaveFocus()
        await user.tab()
        expect(setBtn).toHaveFocus()
    })
})