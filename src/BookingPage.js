import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <p className="eyebrow">Little Lemon Chicago</p>
      <h1 id="booking-title">Reserve a Table</h1>
      <p>Choose a date, time, and occasion for your next meal with us.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
