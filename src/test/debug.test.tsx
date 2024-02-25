/* 
    ? This is just a file to show how can you debug a test
    => The best way I found is the usage of the logRoles method.
    + The logRoles method shows the roles present in the nodetree of the the DOM
*/

import { logRoles, render } from "@testing-library/react"
import GetByAny from "../components/getBy"

describe("debugging tests",()=>{
    it("renders the page and shows the roles tree",()=>{
        const view = render(<GetByAny/>)
        logRoles(view.container);
    })
})