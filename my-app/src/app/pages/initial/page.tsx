'use client';

import { Button, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


export default function Initial() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 2, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.2 }}
                className="InitialContent"
                id="Initial"
            >
                <section className="Title">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 5, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="TitleName"
                        style={{
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontFamily: 'Inria Sans',
                            fontWeight: '700',
                            wordWrap: 'break-word',
                        }}
                    >
                        Guilherme Souza
                    </motion.div>
                    <div
                        className="SubtitleDev"
                        style={{
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 20,
                            fontFamily: 'Inria Sans',
                            fontWeight: '300',
                            wordWrap: 'break-word',
                        }}
                    >
                        {"<"}Desenvolvedor Front-End{">"}
                    </div>
                </section>
                <section className="LinksNavgation">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        className="link"
                        style={{
                            width: '12vh',
                            height: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontFamily: 'Inria Sans',
                            fontWeight: '400',
                            wordWrap: 'break-word',
                        }}
                    >
                        <Link activeClass="active" className="test1" to="Skils"
                            spy={true} smooth={true} duration={1500} offset={-100}>Skils</Link>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '12vh',
                            height: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'Inria Sans',
                            fontWeight: '400',
                            wordWrap: 'break-word',
                        }}
                    >
                        <Link activeClass="active" className="test1"
                            to="about" spy={true} smooth={true}
                            duration={2000} offset={270}>Sobre</Link>

                        <br />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '18vh',
                            height: '100%',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'Inria Sans',
                            fontWeight: '400',
                            wordWrap: 'break-word',
                        }}
                    >
                        <Link activeClass="active" className="test1"
                            to="form" spy={true}
                            smooth={true} duration={3000} offset={100}>Contato</Link>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 10, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Tooltip content="Clique para baixar">
                            <Button style={{ marginTop: '-5px' }} color="default" variant="shadow">
                                Curriculo
                            </Button>
                        </Tooltip>
                    </motion.div>
                </section>
            </motion.div>
        </>
    );
}
