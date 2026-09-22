import { useReducer } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export function updateTimes(state, action) {
  return window.fetchAPI(new Date(action));
}

function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  function submitForm(formData) {
    const success = window.submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  }

  return (
    <main className={location.pathname === "/" ? "home-main" : undefined}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
