import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
