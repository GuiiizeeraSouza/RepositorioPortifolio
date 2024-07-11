'use client';

import { motion } from "framer-motion";
import GridImages from "@/app/components/GridImages/page";

export default function Skils() {
    return (
        <div className="SkilsContent" id="Skils">
            <motion.div
                initial={{ opacity: -9, y: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: -9, y: 0 }}
                transition={{ duration: 5.5 }}
                style={{
                    marginTop: '0vh',
                    position: 'relative',
                    transform: 'rotate(90deg)'  // Rotaciona o texto em 90 graus
                }}
                className="LedRosa"
            >
                <motion.div
                    initial={{ opacity: -10, y: 0 }}
                    whileInView={{ opacity: 5 }}
                    exit={{ opacity: -10, y: 0 }}
                    transition={{ duration: 1.8 }}
                    style={{
                        marginTop: '2vh',
                        marginLeft: '40vh',
                        position: 'relative',
                        transform: 'rotate(90deg)'  // Rotaciona o texto em 90 graus
                    }}
                    className="w-[386px] h-[410px] origin-top-left
    text-center text-white text-[150px] font-bold font-['Inria Sans']"
                >
                    <span id="titleSkils" style={{ marginLeft: '-15vh', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SKILLS.</span>
                </motion.div>
            </motion.div>
            <GridImages></GridImages>
        </div>
    );
}