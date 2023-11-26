import React from 'react';
import '../index.css';

function About() {

  return (
    <div className='App'>
        <div className='container'>
        <div className='article'>
            <div>
                <img  src="/assets/health.jpg" alt='Imagem de saude ' width="450px"/>
                <div className='banner'>
                    <img src="/assets/logo.svg" className='card-logo' alt="App logo" fill ="#327AD9"/>
                    <img src="/assets/health.jpg" alt='Imagem de saude' width="300px"/>
                </div>
            </div>
        <div className='about-text'>
                <div>
                    <h1>Nosso principal objetivo?</h1>
                    <p>O principal objetivo do nosso software é proporcionar um meio acessível e eficiente para os usuários gerenciarem e melhorarem sua saúde mental. Em um mundo cada vez mais conectado e acelerado, cuidar do bem-estar mental tornou-se um desafio significativo. Nosso projeto aborda essa necessidade com uma abordagem holística, utilizando a tecnologia como uma ferramenta facilitadora.</p>
                </div>
                <div>
                    <h1>Sobre o software</h1>
                    <p>Este software é projetado para ser um companheiro constante no caminho para uma melhor saúde mental. Seu propósito é oferecer aos usuários uma plataforma onde possam, de maneira simples e intuitiva, obter uma visão clara de sua saúde mental atual e acompanhar seu progresso ao longo do tempo. Através de funcionalidades interativas, o aplicativo não apenas ajuda a identificar áreas que precisam de atenção, mas também fornece suporte prático para manter e melhorar o bem-estar mental.</p>
                </div>
                <div>
                    <h1>Nosso foco?</h1>
                    <p>Com um foco especial na rotina diária, o software visa integrar práticas de autocuidado e bem-estar na vida cotidiana do usuário. Ao fornecer lembretes e ferramentas para registrar atividades cotidianas, o aplicativo incentiva a adoção de hábitos saudáveis, que são essenciais para manter uma boa saúde mental.</p>
                </div>
        </div>
        </div>
        <button>Saiba mais</button>
        </div>
    </div>
    );
}

export default About;