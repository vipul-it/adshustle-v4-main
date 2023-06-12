import { Route, Routes } from "react-router";
import "./App.css";
import Landingpage from "./component/Landingpage";
import ContactUs from "./component/ContactUs";


function App() {
  

  return (
    <>
    <ContactUs />
    
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
