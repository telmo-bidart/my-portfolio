import React from 'react'
import "./intro.css"
import me from "../intro/img/me.png"

const intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">
                        Olá, me chamo 
                    </h2>
                    <h1 className="i-name">
                        Telmo Bidart
                    </h1>
                    <div className="i-tittle">
                         <div className="i-tittle-wrapper">
                             <div className="i-tittle-item">
                                 Front-end Developer
                             </div>
                             <div className="i-tittle-item">
                                 UI/UX Designer
                             </div>
                             <div className="i-tittle-item">
                                 Professor
                             </div>
                    </div>
                    </div>
                    <div className="i-desc">
                        Tenho 22 anos, sou natural de macéio alagoas e atualmente moro em são paulo. Me apaixonei por programação em outubro do ano passado e desde então venho estudando e me aprimorando na área.
                    </div>
                </div>
            </div>
            <div className="i-right"><div className="i-bg">
                </div><img src={me} alt="" className="i-img" /></div>
        </div>
    )
}

export default intro
