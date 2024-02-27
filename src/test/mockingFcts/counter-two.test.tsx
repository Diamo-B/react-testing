import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterTwo from "../../mockingFcts/counter-two"

describe("Mocking functions tests",()=>{

    it("checks whether the buttons are rendered when the functions are passed", () => {
      const increment = jest.fn();
      const decrement = jest.fn();
      render(
        <CounterTwo
          count={0}
          handleIncrement={increment}
          handleDecrement={decrement}
        />
      );
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2)
    });
    
    it("checks whether the functions are called", async() => {
      user.setup()
      const increment = jest.fn();
      const decrement = jest.fn();
      render(
        <CounterTwo
          count={0}
          handleIncrement={increment}
          handleDecrement={decrement}
        />
      );
      const buttons = screen.getAllByRole("button");
      await user.click(buttons[0]);
      await user.click(buttons[1]);
      expect(increment).toHaveBeenCalledTimes(1);
      expect(decrement).toHaveBeenCalledTimes(1);
    });
})