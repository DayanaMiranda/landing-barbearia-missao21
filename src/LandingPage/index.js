import React, { useState } from 'react';
import './style.css';


export default function LandingPage() {
    const [ehTemaEscuro, setEhTemaEscuro] = useState(false);

    const alterarTema = () => {
        setEhTemaEscuro(!ehTemaEscuro);
    }


    return (
        <div className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
            <nav className='topo'>
                <div className='nav-bar limitar-secao'>
                    <img className='logo' src="./assets/barbearia-logo.png" alt="logo" />

                    <button onClick={alterarTema} className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>                        
                        <img src={ehTemaEscuro ? 'assets/sun.png' : 'assets/moon.png'} alt="icone" />
                        {ehTemaEscuro ? `Light` : `Dark`}
                    </button>
                </div>
            </nav>

            <section className='banner'>
                <div className='banner-image'></div>
            </section>

            <section className='secao-texto'>
                <div className='texto limitar-secao'>
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className='p-1'>
                        Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                    </p>
                    <p>
                        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                    </p>
                    <p className='signature'>
                        S. Kelly
                    </p>
                </div>
            </section>
        </div>
    );
}