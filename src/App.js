import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
