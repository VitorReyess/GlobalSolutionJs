import React from "react";
import '../index.css';
import { useNavigate } from "react-router-dom";


function NavBar(){
    const navigate = useNavigate();
    const userName = sessionStorage.getItem('userName');
    const userMail = sessionStorage.getItem('userMail');
    const logged = sessionStorage.getItem('Logged');

    function handleLogout() {
        sessionStorage.removeItem('Logged');
        sessionStorage.removeItem('userMail');
        sessionStorage.removeItem('userName');
        navigate('/login');
        alert("Volte sempre!");
    }

    const LogoutButtonHidden = !logged;
    return(
        <header className="nav-bar">
            <div>
            <img src="/assets/logoBar.svg" className='nav-bar-logo' alt="App logo"/>
            </div>
            <div>
                Global Solution 2023 - Engenharia de software
            </div>
            <div className="header-user-info">
                {logged && ( // Exibe as informações do usuário apenas se estiver logado
                  <>
                    <span>Olá! Seja bem-vindo(a) {userName}</span>
                    <b><span>{userMail}</span></b>
                  </>
                )}
                {!LogoutButtonHidden && (
                  <div id='logoutContainer'>
                      <button id="logoutButton" onClick={handleLogout}>Logout</button>
                  </div>
                )}
            </div>
        </header>
    );
}

export default NavBar;