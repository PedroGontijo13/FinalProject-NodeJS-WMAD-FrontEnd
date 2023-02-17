import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FormPage from "./pages/FormPage";
import FoundPets from "./pages/FoundPets";
import FoundPetsFormPage from "./pages/FoundPetsFormPage";
import LoginPage from "./pages/LoginPage";
import LostPetsFormPage from "./pages/LostPetsFormPages";
import LostPetsPage from "./pages/LostsPetsPage";
import MainPage from "./pages/MainPage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/FoundPets" element={<FoundPets />} />
        <Route path="/LostPets" element={<LostPetsPage />} />
        <Route path="/FormPage" element={<FormPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/CreateFoundPet" element={<FoundPetsFormPage />} />
        <Route path="/CreateLostPet" element={<LostPetsFormPage />} />
      </Routes>
    </Router>
  );
}
