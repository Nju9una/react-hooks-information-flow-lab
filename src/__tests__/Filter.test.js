import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

const categories = ["All", "Produce", "Dairy", "Dessert"]; // Define categories for testing

test("displays the <select> element", () => {
  render(<Filter categories={categories} />); // Pass categories prop
  expect(screen.queryByRole("combobox")).toBeInTheDocument();
});

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();
  render(<Filter categories={categories} onCategoryChange={onCategoryChange} />); // Pass categories prop

  fireEvent.change(screen.queryByRole("combobox"), {
    target: { value: "Dairy" },
  });
  expect(onCategoryChange).toHaveBeenCalled();
});
