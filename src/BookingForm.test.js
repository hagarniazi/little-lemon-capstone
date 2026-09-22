import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockAvailableTimes = ["17:00", "18:00", "19:00"];

let mockDispatch;
let mockSubmitForm;

function renderBookingForm() {
  return render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />,
  );
}

function fillValidForm() {
  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: "2026-09-20" },
  });
  fireEvent.change(screen.getByLabelText("Time"), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "Anniversary" },
  });
}

describe("BookingForm validation", () => {
  beforeEach(() => {
    mockDispatch = jest.fn();
    mockSubmitForm = jest.fn();
  });

  test("renders the required HTML5 validation attributes", () => {
    renderBookingForm();

    expect(screen.getByLabelText("Date")).toBeRequired();
    expect(screen.getByLabelText("Time")).toBeRequired();

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");

    expect(screen.getByLabelText("Occasion")).toBeRequired();
  });

  test("keeps the submit button disabled for invalid data", () => {
    renderBookingForm();

    const submitButton = screen.getByRole("button", {
      name: "Make Your Reservation",
    });
    const guestsInput = screen.getByLabelText("Number of guests");

    expect(submitButton).toBeDisabled();

    fireEvent.change(guestsInput, { target: { value: "0" } });

    expect(submitButton).toBeDisabled();
  });

  test("enables the submit button when all fields are valid", () => {
    renderBookingForm();

    fillValidForm();

    expect(
      screen.getByRole("button", { name: "Make Your Reservation" }),
    ).toBeEnabled();
  });

  test("submits valid form data through submitForm", () => {
    renderBookingForm();

    fillValidForm();
    fireEvent.submit(
      screen.getByRole("button", { name: "Make Your Reservation" }),
    );

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2026-09-20",
      time: "18:00",
      guests: "2",
      occasion: "Anniversary",
    });
  });

  test("does not submit incomplete form data", () => {
    renderBookingForm();

    fireEvent.submit(
      screen.getByRole("button", { name: "Make Your Reservation" }),
    );

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });
});
