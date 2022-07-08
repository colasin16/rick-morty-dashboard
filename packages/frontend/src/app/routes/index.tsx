import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../features/login/ui/pages/LoginPage";
import App from "../../_shared/ui/pages/App";
import { RequireAuth } from "./RequireAuth";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <App />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
