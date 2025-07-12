import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'; // Make sure to create this context

export const useAuth = () => {
  return useContext(AuthContext);
};