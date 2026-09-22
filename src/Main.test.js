import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

describe("BookingForm", () => {
  test("renders the date field label", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />,
    );

    expect(screen.getByLabelText("Date")).toBeInTheDocument();
  });
});

describe("booking time helpers", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("initializeTimes returns available times from the API", () => {
    const fetchAPIMock = jest
      .spyOn(window, "fetchAPI")
      .mockReturnValue(["17:00", "18:00", "19:00"]);

    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result).not.toHaveLength(0);
    expect(fetchAPIMock).toHaveBeenCalledWith(expect.any(Date));
  });

  test("updateTimes requests available times for the selected date", () => {
    const fetchAPIMock = jest
      .spyOn(window, "fetchAPI")
      .mockReturnValue(["17:00", "18:00", "19:00"]);
    const selectedDate = "2026-09-20";

    const result = updateTimes([], selectedDate);

    expect(Array.isArray(result)).toBe(true);
    expect(result).not.toHaveLength(0);
    expect(fetchAPIMock).toHaveBeenCalledWith(new Date(selectedDate));
  });
});
