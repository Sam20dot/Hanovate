import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/market" element={<Market />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}


