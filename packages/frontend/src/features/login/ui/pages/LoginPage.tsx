import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../logo.svg";
import "../../../../App.css";
import { Loginer } from "../../application/Loginer";
import { HttpLoginService } from "../../infrastructure/http/HttpLoginService";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  selectUserLoggedIn,
  setSession,
} from "../../../../_shared/infrastructure/session/SessionSlice";
import { addToast } from "../../../../_shared/ui/components/toast/ToastSlice";

export const LoginPage = () => {
  const isUserLoggedIn = useAppSelector(selectUserLoggedIn);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  // Ideally use injection to be able to swap Http service for other technology
  const loginer = new Loginer(new HttpLoginService());

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const session = await loginer.login({ username, password });
      localStorage.setItem("token", session.token);
      localStorage.setItem("userId", session.user.id);
      localStorage.setItem("username", session.user.username);
      dispatch(setSession(session));
      goToDashboard();
    } catch (error) {
      const message = (error as Error).message ?? "There was an unexpected error";
      dispatch(addToast({ message, type: "error" }));
    }
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      goToDashboard();
    }
  }, [isUserLoggedIn]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
};
