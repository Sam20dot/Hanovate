import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../style/Auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Register with Email and Password
  const registerWithEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name, // Store the user's name
        email: user.email,
        createdAt: new Date()
      });

      navigate('/');
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={registerWithEmail}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}