import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField component", () => {
  it("should call setField with input value when onChange event is fired", () => {
    const setField = jest.fn();
    const placeholder = "Enter value";
    const fieldValue = "";
    const error = "";

    render(
      <InputField
        setField={setField}
        placeholder={placeholder}
        fieldValue={fieldValue}
        error={error}
      />
    );

    const input = screen.getByPlaceholderText(placeholder);
    const value = "Testing";

    fireEvent.change(input, { target: { value } });

    expect(setField).toHaveBeenCalledWith(value);
  });
});
