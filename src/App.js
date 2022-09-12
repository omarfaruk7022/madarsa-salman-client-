import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashborad";
import MyProfile from "./Components/Dashboard/MyProfile";
import MyReview from "./Components/Dashboard/MyReview";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import RequireAuth from "./Components/Pages/RequireAuth";
import Signup from "./Components/Pages/Signup";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          {/* <Route path="profile/:email" element={<MyProfile/>} /> */}
          <Route path="review" element={<MyReview></MyReview>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
