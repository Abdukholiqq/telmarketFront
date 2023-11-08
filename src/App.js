/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements, 
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import "./App.css";
import Home from "./Pages/MainPages";
import Header from "./Components/Header";
import Admin from "./Pages/Admin";
import Singlepage from "./Pages/Singlepage";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Form from "./Components/Halpers/Form"; 

import NotFound from "./Pages/NotFound";
import AuthContextProvider from "./Context/AuthContext";
import UpdateUser from "./Components/Halpers/Forms/updUser.form";
import UpdateProduct from "./Components/Halpers/Forms/updProduct";
import UserLogin from "./Pages/User.login";
import Order from "./Components/Halpers/Forms/order.form";
import Accaunt from "./Components/Halpers/Accaunt";
import AddBrand from "./Components/Halpers/Forms/addCategory";
import UpdateAdmin from "./Components/Halpers/Forms/updAdmin";

export const languageContext = createContext("Uz");
export const URL = "http://localhost:4000/";

function App() {
  const [lang, setLang] = useState("Uz");
  return (
    <languageContext.Provider value={lang}>
      <AuthContextProvider>
        <div className="App">
          <Header lang={lang} setLang={setLang} />
          <Routes>
            <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
            <Route path="/products/:id" element={<Singlepage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/users/register" element={<Register/>}/>
            <Route path="/admin/products" element={<Form/>}/>
            <Route path="/admin/settings" element={<UpdateAdmin/>} />
            <Route path="/admin/products/:id" element={<UpdateProduct/>}/>
            <Route path="/users" element={<Accaunt/>}/> 
            <Route path="/users/login" element={<UserLogin/>}/> 
            <Route path="/orders/:id" element={<Order/>}/> 
            <Route path="*" element={<NotFound />} />
            
          </Routes>
          
          <Footer/>
        </div>
      </AuthContextProvider>
    </languageContext.Provider>
  );
}

export default App;
