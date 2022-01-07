import React from 'react'
import "./about.css"


const About = () => {
    return (
        <div className="a"> 
            <div className="a-left">
                <div className='a-card'>
                    <img src="https://image.freepik.com/vetores-gratis/tela-level-up-realizacao-de-videogame-de-pixel-interface-do-usuario-de-jogos-de-8-bits-de-pixels-e-ilustracao-de-progresso-no-nivel-de-jogo_102902-1274.jpg" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-tittle'>Skills:</h1>
                <p className='a-sub'>Algumas das habilidades que possuo:                </p>
                <p className='a-desc'><b>Hardskills: HTML, CSS, JavaScript, React, Git</b></p>
                <p className='a-desc'><b>Softskills: Organização, Adaptabilidade, Comunicação eficiente e Controle emocional.   </b>        </p>
                <p className="a-desc"><b>Idiomas: Inglês avançado e espanhol básico.</b></p>
                <p className="a-desc">Qualificações: Possuo bastante vontade e determinação para aprender e crescer no ramo de desenvolvimento, tenho grande facilidade em aprender devido a anos dando aulas particulares de matemática e física, por isso sei as formas mais eficientes de aprender, bom conhecimento de lógica.</p>
            </div>
        </div>
    )
}

export default About
