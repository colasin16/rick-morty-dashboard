import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../logo.svg";
import "../../../../App.css";
import { Loginer } from "../../application/Loginer";
import { HttpLoginService } from "../../infrastructure/http/HttpLoginService";
import { useAppDispatch } from "../../../../app/hooks";
import { setSession } from "../../../../_shared/infrastructure/session/SessionSlice";
import { addToast } from "../../../../_shared/ui/components/toast/ToastSlice";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Ideally use injection to be able to swap Http service for other technology
  const loginer = new Loginer(new HttpLoginService());

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const session = await loginer.login({ username, password });
      dispatch(setSession(session));
      navigate("/dashboard");
    } catch (error) {
      const message = (error as Error).message ?? "There was an unexpected error";
      dispatch(addToast({ message, type: "error" }));
    }
  };

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
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
};
