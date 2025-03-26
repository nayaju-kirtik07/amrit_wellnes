import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import Signup from "../auth/Signup/Signup";
import Login from "../auth/Login/Login";
import ContactPage from "../pages/Contact/ContactPage";
import BookingPage from "../pages/Booking/BookingPage";
import BlogPage from "../pages/Blog/BlogPage";
import BlogPostDetailPage from "../pages/BlogPost/BlogPostDetailPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book-now" element={<BookingPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:postId" element={<BlogPostDetailPage />} />
    </Routes>
  );
};

export default AllRoutes;
