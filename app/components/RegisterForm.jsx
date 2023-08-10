"use client";

import { useState } from "react";

async function registerUser(data) {
  const URL = "http://localhost:3000/api/auth";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(URL, options)
  return response;
}

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await registerUser({ email, password, task: "register" });
    const responseJson = response.json();
    console.log({ responseFromForm: responseJson });
    if (responseJson.status === 200) {
      setEmail("");
      setPassword("");
      setMessage(`${responseJson.message}`);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setMessage("something went wrong");
    }
  }

  return (
    <>
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onInput={e => setEmail(e.target.value)} />

            <label htmlFor="password" >Password</label>
            <input type="password" id="password" value={password} onInput={e => setPassword(e.target.value)} />
            <input type="submit"  value="Create" className="btn"/>
        </form>
    </div>
    </>
  )
}
