import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../features/login/ui/pages/LoginPage";
import App from "../../_shared/ui/pages/App";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<App />} />
    </Routes>
  </BrowserRouter>
);
