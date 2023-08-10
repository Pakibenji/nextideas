"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

async function registerUser(data) {
  const URL = "http://localhost:3000/api/auth";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(URL, options);
  return response;
}

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if ((email === "") | (password === "") | (confirm === "")) {
      setMessage("Please fill all fields");
      setHasError(true);
      return
    }

    if (password !== confirm) {
      setMessage("Password and Confirm Password are different");
      setHasError(true);
      return;
    }
    setMessage("");
    setHasError(false);

    const response = await registerUser({ email, password, task: "register" });
    const responseJson = await response.json();
    if (responseJson.status === 200) {
      setEmail("");
      setPassword("");
      setConfirm("")
      setMessage(`${responseJson.message}`);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setHasError(true)
      setMessage(responseJson.message);
    }
  }

  function toggleShow() {
    setShowPassword((current) => !current);
  }
  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <div className="pass-eye">
          <input
            type={showPassword ? 'text' : "password"}
            id="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />{' '}
          {showPassword && <FaEyeSlash onClick={toggleShow}/>}
          {!showPassword && <FaEye onClick={toggleShow}/>}
          </div>
          <div className="pass-eye">
          <input
            type={showPassword ? 'text' : "password"}
            id="confirm"
            value={confirm}
            onInput={(e) => setConfirm(e.target.value)}
          />{' '}
          {showPassword && <FaEyeSlash onClick={toggleShow}/>}
          {!showPassword && <FaEye onClick={toggleShow}/>}
          </div>
          <input type="submit" value="Create" className="btn" />
        </form>
      </div>
      Already have an account? <Link href="/login">Login</Link>
      {message && <div className={hasError ? "error" : "ok" }>{message}</div>}
    </>
  );
}
