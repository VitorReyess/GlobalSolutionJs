import '../index.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';



function Login() {



  
 
  
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useNavigate();

  const checkPreviousLogin = () => {
    const Logged = sessionStorage.getItem('Logged');

    if (Logged) {
      alert('Você já está logado.');
      history('/'); 
      return true; 
    }
    return false; 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    const isAlreadyLoggedIn = checkPreviousLogin();

    if (isAlreadyLoggedIn) {
      return; 
    }

    // Fetch dados da API
    try {
      const response = await fetch('http://localhost:3000/dados');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários.');
      }
      const users = await response.json();
      const user = users.find(user => user.email === email.trim() && user.senha === senha.trim());

      if (user) {
        sessionStorage.setItem('Logged', 'true');
        sessionStorage.setItem('userMail', user.email);
        sessionStorage.setItem('userName', user.nome);
        alert("Login bem sucedido, " + user.nome + "!");
        history('/'); 
      } else {
        alert("Credenciais não encontradas.");
      }
    } catch (error) {
      alert("Erro ao validar o login: " + error.message);
    }
  };

  return (
    <div className='App'>
        
            <form className='card'>
                <img src="/assets/logo.svg" className='card-logo' alt="App logo" fill ="#327AD9"/>
                <input name = "email" type ="text" placeholder='Email' value={email} onChange={handleEmailChange}/>
                <input type="password" id="loginPassword" placeholder="Digite sua senha" required value={senha} onChange={handleSenhaChange}/>
                <button type='button' onClick={handleLogin}>Login</button>

            </form>
    </div>
    );
}

export default Login;