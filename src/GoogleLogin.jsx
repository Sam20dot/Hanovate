// src/GoogleLogin.jsx
import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export default function GoogleLogin() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("User Info:", result.user);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : ( <> <h1> welcome on login pages </h1>
      <button onClick={handleLogin}>Sign in with Google</button></>
        
      )}
    </div>
  );
}
