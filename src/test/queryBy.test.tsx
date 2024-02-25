/* 
    ! read carefully
    * We've been using the getBy... function which returns the element when found and returns an error if not found within the DOM.
    + queryBy...
        ? queryBy... does the same thing; it finds an element in the DOM, but with a bit of differences:
        => Returns either the matching node for an element or null if no element is present
        => Useful for asserting elements that are not present
        => Throws an error if more than one element matched
    + queryAllBy...
        ? same as queryBy... but returns an array of all matching elements in the DOM, and returns an empty array if no elements match
    explain: The queryBy... and queryAllBy... support the same suffixes as the getBy...
    => queryByRole, queryByLabelText, queryByPlaceholderText, queryByText, queryByDisplayValue, queryByAltText, queryByTitle, queryByTestId
    => queryAllByRole, queryAllByLabelText, queryAllByPlaceholderText, queryAllByText, queryAllByDisplayValue, queryAllByAltText, queryAllByTitle, queryAllByTestId

*/
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import QueryBy from "../components/queryBy"

describe('QueryBy tests', () => { 
    const skills = ['html','css','js']
    test("renders login button",()=>{
        // + render the component 
        render(<QueryBy skills={skills}/>);
        // + get the login button using the getByRole query
        const login = screen.getByRole("button",{
            name:"Login"
        })
        // + check if the login button is in the document
        expect(login).toBeInTheDocument();
    })


    //! this will throw an error since the state is false so the start learning button is completely non existant in our DOM, which means that the getBy will throw an error.
    it("Start learning button is not rendered", ()=>{
        render(<QueryBy skills={skills}/>);
        const startLearningBtn = screen.queryByRole("button",{
            name: "start learning"
        })
        expect(startLearningBtn).not.toBeInTheDocument()
    })

 })