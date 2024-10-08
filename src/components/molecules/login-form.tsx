"use client";
import { useAuthContext } from "@/app/context/auth.context";
import { loginRequestType } from "@/lib/api/types";
import { fetchApi, removeToken, storeToken } from "@/lib/http-client";
import { useState } from "react";
import Button from "../atoms/button";

export default function LoginForm(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const setIsLoggedIn = useAuthContext();

  const submit = async () => {
    const loginRequest: loginRequestType = {
      password,
      username,
    };

    const result = await fetchApi("auth/login", "POST", loginRequest);

    if (result.status == 200) {
      const jwtToken = await result.json();
      storeToken(jwtToken);
      setIsLoggedIn(true);
      return;
    }
    removeToken();
  };

  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="username">username:</label>
      <input
        id="username"
        className="rounded-md bg-neutral-700 px-1"
        name="username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="username">password:</label>
      <input
        id="password"
        className="rounded-md bg-neutral-700 px-1"
        name="username"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        type="button"
        onClick={submit}
        className="rounded-md bg-neutral-500"
      >
        Login
      </Button>
    </form>
  );
}
