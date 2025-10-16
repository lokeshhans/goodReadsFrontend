import Login from "Pages/Auth/login";
import Signup from "Pages/Auth/Signup";
import Home from "Pages/Home/Home";
import NotFound from "Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
    return (
        <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}