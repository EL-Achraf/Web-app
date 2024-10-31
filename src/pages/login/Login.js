import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Vérification des champs
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      // Envoyer les données au backend (remplacez l'URL par celle de votre API)
      const response = await axios.post('http://localhost:8000/api/accounts/login/', {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess('Connexion réussie !');
        // Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions ici
      } else {
        setError(response.data.message || 'Échec de la connexion.');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion.');
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default Login;
