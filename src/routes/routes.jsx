import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../pages/login";
import Home from "../pages/home";
import Admin from "../pages/admin";
import AddProduct from "../pages/add";
import ProductAdmin from "../pages/product";
import SiteHeader from "../components/header";

function AppRoutes(){
    return(
        <BrowserRouter>
        <SiteHeader />
            <Routes>
                
            
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/add" element={<AddProduct />} />
                <Route path="/admin/product" element={<ProductAdmin />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;