import React, { useState } from 'react';
import { auth, provider, db } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import '../style/Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Login with Email and Password
  const loginWithEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date()
      }, { merge: true });

      // Redirect to the Dashboard after successful login
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Email login failed:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    setLoading(true);
    setError('');

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        createdAt: new Date()
      }, { merge: true });

      // Redirect to the Dashboard after successful login
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Google Login Failed:", error);
      setError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Password Recovery
  const recoverPassword = async () => {
    if (!email) {
      setError("Please enter your email to recover your password.");
      return;
    }

    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Password recovery failed:", error);
      setError("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={loginWithEmail}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login with Email"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>

      <div className="separator">
        <hr />
        <span>or</span>
        <hr />
      </div>

      <button onClick={loginWithGoogle} className="google-btn" disabled={loading}>
        {loading ? "Signing in..." : "Sign in with Google"}
      </button>

      <p className="forgot-password" onClick={recoverPassword}>
        Forgot your password?
      </p>

      <p className="signup-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}