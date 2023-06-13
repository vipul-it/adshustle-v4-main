import { Route, Routes } from "react-router";
import "./App.css";
import Landingpage from "./component/Landingpage";
import ContactUs from "./component/ContactUs";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer className="z-50" />
      <ContactUs className="mt-5" />

      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
