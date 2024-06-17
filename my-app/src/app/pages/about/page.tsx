'use client';

import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="AboutContainer" id="about">
            <Image
                src="/notebook.png"
                className="notebook"
            />
            <motion.div
                initial={{ opacity: 0, x: -110 }}
                whileInView={{ opacity: 1, x: 10 }}
                exit={{ opacity: 0, x: 110 }}
                transition={{ duration: 1.0 }}
            >
                <h1 className="title">SOBRE</h1>
            </motion.div>
            <p className="text">Me chamo Guilherme Fernandes de Souza. Sou estudante de Sistemas de Informação há dois anos, com muita dedicação e comprometimento. Tenho como objetivo me tornar um Desenvolvedor Web.
                <br />
                <br />
                <br />

                Já tive uma experiência no mercado de trabalho como desenvolvedor, onde pude mostrar e exercitar minhas habilidades de desenvolvimento de software. Foi uma experiência incrível que adoraria compartilhar com você em uma entrevista.
            </p>
        </section>

    );
}