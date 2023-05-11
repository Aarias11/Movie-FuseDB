import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Upcoming from "./pages/Upcoming";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Search from "./components/Search";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import ShowsPage from "./pages/ShowsPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ScrollToTop from './components/ScrollToTop'
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";








function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar />
      <Search />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/person/:id" element={<ActorPage />} />
        <Route path="/shows/:id" element={<ShowsPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
