import { Outlet } from "react-router-dom";
import Navbar from "./Features/Navbar/Navbar";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
