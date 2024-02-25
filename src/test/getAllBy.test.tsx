/* 
! Every query in getBy... has an equivalent to get multiple items which is getAllBy...
* getAllByRole, getAllByLabelText, getAllByPlaceholderText, getAllByText, getAllByDisplayValue, getAllByAltText, getAllByTitle, getAllByTestId
? Returns an array of all matching nodes for a query, and throws an error if no elements match
*/

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import GetAllBy from "../components/getAllBy"

describe("skills",()=>{
    const skills = ['html','css','js','react'];
    
    it("renders correctly the skills list",()=>{
        render(<GetAllBy skills={skills}/>);
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
    })

    it("renders correctly the skills elements",()=>{
        render(<GetAllBy skills={skills}/>);
        const listElements = screen.getAllByRole("listitem");
        expect(listElements).toHaveLength(skills.length);
    })
})