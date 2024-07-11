"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailJS from '@emailjs/browser';
import { Button } from "@nextui-org/react";
import InputMask from 'react-input-mask';

export default function Forms() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: { preventDefault: () => void; }) {
        e.preventDefault();

        if(name === '' || email === '' || fone === ''){
            alert("Preencha os campos obrigatórios!");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            fone: fone
        }

        emailJS.send("service_ftwofji", "template_bbjijn4", templateParams, "up9PEfj6Zg3158gea")
        .then((response) =>{
            console.log("email enviado")
            setEmail('')
            setFone('')
            setMessage('')
            setName('') 
        }, (err) => {
            console.log("ERRO ", err)
        } )


    }

    return (
        <motion.div className="Forms"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0, top: -100 }}
            transition={{ duration: 1.5 }}>

            <form className="Formulario" onSubmit={sendEmail}>
                <h1 className="TitleForms">CONTATO</h1>

                <input className="InputNome" placeholder="Nome Completo." type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                ></input>

                <input className="InputEmail" placeholder="Email." type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>

                <InputMask className="InputEmail" mask="  (99) 99999-9999" maskChar=" "  placeholder="Telefone."
                    onChange={(e) => setFone(e.target.value)}
                    value={fone}
                ></InputMask>


                <textarea className="Textarea" placeholder="Mande sua pergunta, pedido, elogio, etc..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                ></textarea>
                <Button className="buttonInput" type="submit" value = "Enviar" >ENVIAR</Button>
            </form>
        </motion.div>
    );
}