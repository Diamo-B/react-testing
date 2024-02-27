import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react";
import useCounter from "../components/customHooks/useCounter";

describe("testing custom counter hook",()=>{

    xit("renders the initial count",()=>{
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })

    xit("renders the count with the passed value",()=>{
        const {result} = renderHook(useCounter,{
            initialProps:{
                initialCount: 10
            }
        });
        
        expect(result.current.count).toBe(10)
    })

    it("executes the increment function then renders the correct count", ()=>{
        const {result} = renderHook(useCounter)
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    })

    it("renders the correct count after initialization and after decrementing", () => {
      const { result } = renderHook(useCounter,{
          initialProps: {
            initialCount: 5,
          },
        });
      act(() => result.current.decrement());
      expect(result.current.count).toBe(4);
    });
});