import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Weather, Welcome, NotFound } from "./components";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/welcome" element={<Welcome name="Sudarshan" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
