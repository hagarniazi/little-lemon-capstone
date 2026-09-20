import { Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </main>
  );
}

export default Main;
