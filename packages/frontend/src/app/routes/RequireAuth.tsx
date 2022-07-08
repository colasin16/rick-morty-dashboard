import { useLocation, Navigate } from "react-router-dom";
import { selectUserLoggedIn } from "../../_shared/infrastructure/session/SessionSlice";
import { useAppSelector } from "../hooks";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isUserAuthenticated = useAppSelector(selectUserLoggedIn);
  const location = useLocation();

  if (!isUserAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
