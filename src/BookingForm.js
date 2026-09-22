import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const isFormValid =
    Boolean(date) &&
    availableTimes.includes(time) &&
    guests !== "" &&
    Number(guests) >= 1 &&
    occasion !== "";

  function handleDateChange(event) {
    const selectedDate = event.target.value;

    setDate(selectedDate);
    dispatch(selectedDate);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__field">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="booking-form__field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          required
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button
        className="button button--primary"
        type="submit"
        disabled={!isFormValid}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
