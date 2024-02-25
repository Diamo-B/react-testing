/* 
    ? What if elements are not present in the DOM at first, but they make their appearance after a while
    .e.g: data getting fetched from a server needs a while to get retrieved then get rendered.
    * Here we need to use the findBy... or the findAllBy...
    explain: findBy... and findAllBy... supports all the suffixes such as:
    => findByRole, findByLabelText, findByPlaceholderText, findByText, findByDisplayValue, findByAltText, findByTitle, findByTestId
    => findAllByRole, findAllByLabelText, findAllByPlaceholderText, findAllByText, findAllByDisplayValue, findAllByAltText, findAllByTitle, findAllByTestId

    ! The findBy... and findAllBy... need you to know the following things:
    + findBy:
        * Returns a promise which resolves when an element that matches the query is found
        * The promise is rejected when: no element is found, more than one element is found, or after a default timeout of 1000ms
    + findBy:
        * Returns a promise which resolves to an array of elements when an element or more that match the query were found
        * The promise is rejected when: no elements were found, or after a default timeout of 1000ms
    ! The timeout can be overriden with assigning a new one to the timeout option of the findBy... or findALlBy... 
*/
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import FindBy from "../components/findBy"

describe('findBy Tests', () => {
    const skills = ["html",'css','js'] 
    it("Start learning button is eventually displayed (in 1000ms)", async ()=>{
        render(<FindBy skills={skills}/>);
        //? failing test since the getByRole is a synchronous functon
        /* const startLearningBtn = screen.getByRole("button",{
            name:"start learning"
        }) */

        //Fix: use the Async findByRole function to wait for the 1000 ms to pass
        const startLearningBtn = await screen.findByRole("button",{
            name:"start learning"
        },{
            timeout: 2000
        })
        expect(startLearningBtn).toBeInTheDocument();
    })    
})