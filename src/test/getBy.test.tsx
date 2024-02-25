import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GetByAny from "../components/getBy";

describe.only("The get by role tests", ()=>{
    //Explain: first choice
    test("GetByAny teest",async ()=>{
        render(<GetByAny/>);

        //* This is the way to get a text input
        const nameInput = screen.getByRole('textbox',{
            name: "Name"
        });

        const BioArea = screen.getByRole("textbox",{
            name:"Bio"
        })
        /* 
            ! the GetByAny accepts only a single occurence of the element. if multiple are present use the options to diff between'em since u'll be getting errors 
        */

        //* This is the way to get a select input
        const selectInput = screen.getByRole("combobox");
        //* This is the way to get a checkbox element
        const checkboxInput = screen.getByRole("checkbox");
        //* This is how to get a button element
        const submitButton = screen.getByRole("button");

        expect(nameInput).toBeInTheDocument()
        expect(BioArea).toBeInTheDocument();
        expect(selectInput).toBeInTheDocument();
        expect(checkboxInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })

    //*==============================================================================
    //Explain: second choice (best for forms)
    /* 
        ? getByLabelText gets an element by it's label (same as above with a simple diff: it works even without a link between an "id" and a "for" attributes).
        ! P.S: if there's no id-for combination, the label should be enclosed in a label tag with the input it references
    */
    test.only("getByLabelText test",()=>{
        render(<GetByAny/>);
        const termsAndConditions = screen.getByLabelText(/^I agree to the terms.*/);
        expect(termsAndConditions).toBeInTheDocument();
    })

    //*==============================================================================
    //Explain: third choice
        
    /* 
        ? getByPlaceholderText gets an element using it's placeholder text
    */
    test("getByPlaceholderText test",()=>{
        render(<GetByAny/>);    
        const nameInput = screen.getByPlaceholderText("Type here");
            expect(nameInput).toBeInTheDocument();    
    })

    // *==============================================================================
    //Explain: fourth choice
    /* 
        ? getByText used to get an element according to its text node. it is generally used to get a paragraph or a span using its content
    */
    test("getByText",()=>{
        render(<GetByAny/>);
        const requiredText = screen.getByText((text)=>text.startsWith("All elements are"))
        expect(requiredText).toBeInTheDocument(); 
    })

  // *================================================================================
    /* 
        ? getByDisplayValue gets an element by value attribute (inputs, textareas and select)
    */
    //Explain: fifth choice

    test("getByDisplayValue",()=>{
        render(<GetByAny/>);
        const nameInputWvalue = screen.getByDisplayValue("Bachar");
        expect(nameInputWvalue).toBeInTheDocument();      
    })

    // *===============================================================================
    /* 
        ? getByAltText gets an element that has a given Alt attribute. This supports only the elements which accepts an ALT text such as <img>, <input> or <area> ....
    */

    //Explain: sixth choice

    test("getByAltText",()=>{
        render(<GetByAny/>);
        const altTextImg = screen.getByAltText("a person with a laptop")
        expect(altTextImg).toBeInTheDocument()
    })

    /* 
        ? getByTitle gets an element that has a given Title attribute.
    */

    //Explain: seventh choice

    test("getByTitle",()=>{
        render(<GetByAny/>);
        const textWtitleAttr = screen.getByTitle("close");
        expect(textWtitleAttr).toBeInTheDocument();
    })

    /* 
        ? getByTestId gets an element that has the matching data-testid attribute  
        interesting: getByTestId is to be used when all of the above doesn't work or when the text is dynamic
    */

    test("getBy_data-testid_attribute",()=>{
        render(<GetByAny/>);
        const jobLocation = screen.getByTestId("JobTest");
        expect(jobLocation).toBeInTheDocument();
    })
})