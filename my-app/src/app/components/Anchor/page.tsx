'use client';

import React from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Anchor() {
    return (
        <motion.div className="Anchor"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
        >
            <Link activeClass="active" className="test2" to="Initial"
                spy={true} smooth={true} duration={2300} offset={-150}>    
                
                <Image
                    isBlurred
                    width={30}
                    src="/ancora.png"
                    alt="NextUI Album Cover"
                    className="m-3"

                /></Link>
        </motion.div>
    );
}