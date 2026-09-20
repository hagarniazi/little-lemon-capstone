import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Little Lemon foundation", () => {
  render(<App />);
  expect(screen.getAllByAltText(/little lemon logo/i)).toHaveLength(2);
  expect(
    screen.getByRole("navigation", { name: /primary navigation/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 1, name: "Little Lemon" }),
  ).toBeInTheDocument();
});

test("renders the reservation route", () => {
  window.history.pushState({}, "", "/reservations");
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Reserve a Table" }),
  ).toBeInTheDocument();
});
