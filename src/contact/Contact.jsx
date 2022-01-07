import React from 'react'
import "../contact/contact.css"
import { useRef } from "react"
import emailjs from "@emailjs/browser";
import { useState } from 'react';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_nbije0e', 'template_3rsuvsx', formRef.current, 'user_TbKQRmDB2pfJXHSYvj4CF')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  
        
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-tittle">
                        Contato:
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-telephone-communication-dreamstale-lineal-dreamstale-1.png" alt="" className="c-icon" />
                            +55 82 993355123
                        </div>
                        <div className="c-info-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="" className="c-icon" />
                            telmobidart@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/external-globe-tourism-and-outdoor-recreation-flatart-icons-outline-flatarticons-1.png" alt="" className="c-icon" />
                            Suzano, SP
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>Fala comigo!</b></p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea rows="5" placeholder='message'name='message'/>
                        <button>Enviar</button>
                        {done && "Thank you"}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
