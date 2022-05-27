import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelCaseWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toHaveStyle({
    backgroundColor: "red",
  });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe("change to red");
  expect(colorButton).toHaveStyle({
    backgroundColor: "blue",
  });
});

test("button should be enabled when checkbox is unchecked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("button should be disabled when checkbox is checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const checkBox = screen.getByRole("checkbox");
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

describe("spaces before camel-case letters", () => {
  test("Works for inner captial letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner captial letters", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner captial letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
