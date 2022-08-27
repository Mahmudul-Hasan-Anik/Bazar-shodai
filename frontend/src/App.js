import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Auth/Registration";
import Login from "./Pages/Auth/Login";
import Forgot from './Pages/Auth/Forgot';


function App() {
  return (
    <>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
    </Routes>
  </BrowserRouter>,
    </>
  );
}

export default App;
