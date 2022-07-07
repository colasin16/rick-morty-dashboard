import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../features/login/ui/pages/LoginPage";
import { selectUserLoggedIn } from "../../_shared/infrastructure/session/SessionSlice";
import App from "../../_shared/ui/pages/App";
import { useAppSelector } from "../hooks";

export const Router = () => {
  const isUserAuthenticated = useAppSelector(selectUserLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {isUserAuthenticated ? (
          <>
            <Route path="/dashboard" element={<App />} />
          </>
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
