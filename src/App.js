import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import { Container } from "react-bootstrap";
import Homescreen from "./componenets/Homescreen";
import Aboutus from "./componenets/Aboutus";

import Tester from "./componenets/Tester";
import { Outlet } from "react-router-dom";
import ResultLoginPage from "./componenets/ResultLoginPage";


function App() {
  return (
    <>
      <div className="bigDivision"> 
      {/* so the above div will be default on every Screen */}
        <main>
          <Outlet />                 
        </main>
      </div>
    </>
  );
}

export default App;
  