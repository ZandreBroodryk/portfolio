"use client";
import { loginRequestType } from "@/lib/api/types";
import { fetchApi, remvoeToken, storeToken } from "@/lib/http-client";
import { ReactNode, useState } from "react";

export default function Login(): ReactNode {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = async () => {
    const loginRequest: loginRequestType = {
      password,
      username,
    };

    const result = await fetchApi("auth/login", "POST", loginRequest);

    if (result.status == 200) {
      const jwtToken = await result.json();
      storeToken(jwtToken);
      return;
    }
    remvoeToken();
  };

  return (
    <form className="flex flex-col gap-4">
      <input
        className="bg-neutral-700"
        name="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="bg-neutral-700"
        name="username"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="button" onClick={submit}>
        Login
      </button>
    </form>
  );
}
