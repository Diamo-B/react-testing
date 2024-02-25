# What to test?
1. Test if component renders.
2. Test if component renders with props.
3. Test if component renders in different states.
    - A Navbar component that has a Login button should show that button only when the user is not logged in, so you test if that button renders when the user is logged out and whether it disappears when the user is logged in.
4. Test if the component reacts to events correctly.

# What not to test?
1. Implementation details => You want to test the behavior not how the behavior is implemented
2. Third party code => You should be testing the code you write not the one you are taking from a third-party library
3. Don't test code that's not important from a user point of view
    - You got a function that turns dates into human-readable format (e.g DD-MM-YYYY). You should not test whether that function is called by your component, but you should test directly on the date if it's displayed in the format you are looking for in this case (DD-MM-YYYY).

# Testing in react
Every test we write in react generally involves the following steps:
1. Render the component (render method)
2. Find an element rendered by the component (using queries)
3. Assert against the element (using matchers)
4. The test passes or fails according to the result of the assertion

# React testing library queries
Queries are the way we can find an element within a component so that we can assert it.
1. To find a single element on the page we use the following queries:
    - `getBy`<sub>suffix</sub>
    : returns the matching node, and throw an error if no elements match or if more than one element matches
    - `queryBy`<sub>suffix</sub>
    - `findBy`<sub>suffix</sub>
2. To find multiple elements on the page we use the following queries:
    - `getAllBy`<sub>suffix</sub>
    - `queryAllBy`<sub>suffix</sub>
    - `findAllBy`<sub>suffix</sub>
### Suffixes
The suffixes are the things that you need to combine with the queries statements in order to get the desired element(s). We can differentiate between a set of suffixes as follows:
- `Role` : Stands for the ARIA role which provides semantic meaning to content to ensure ppl using assistive tech are able to use'em
- `LabelText`
- `PlaceHolderText`
- `Text`
- `DisplayValue`
- `AltText`
- `Title`
- `TestId`

## Combinations Queries - Suffixes
1. `getBy`
    + `getByRole`: it queries for elements with a given role (ARIA Role), each element in the html got a default one
        - Button elements by default use the <mark>button</mark> role
        - Text inputs and text areas by default use the <mark>textbox</mark> role
        - Inputs type number by default use the <mark>spinbutton</mark> role
        - Select inputs by default use the <mark>ComboBox</mark> role  
        - Checkbox inputs use by default the <mark>checkbox</mark> role.
        <p>For more info ab the default Aria roles visit <a href="https://www.w3.org/TR/html-aria">the official W3 website</a></p>
        e.g:
        Let's say we got this html sample

        ```html
            <!-->Roles.tsx<-->
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
        ```
        we wanna retrieve the input element and verify if it got rendered correctly

        ```javascript
            // CheckRender.test.tsx
            import "@testing-library/jest-dom';
            import {render, screen} from "@testing-library/react";
            import Roles from "path-to-file";

            function getByName (){
                render(<Roles/>);
                const nameInput = screen.findByRole("textbox");
                expect(nameInput).toBeInTheDocument();      
            }

            it("Checks whether the name input is rendering" , getByName); 
        ```