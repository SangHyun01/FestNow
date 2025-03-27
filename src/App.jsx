import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ChatRoomList from "./pages/ChatRoomList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/chatroomlist" element={<ChatRoomList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
