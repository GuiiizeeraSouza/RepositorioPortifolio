'use client';

import { motion } from "framer-motion";
import GridImages from "@/app/components/GridImages/page";

export default function Skils() {
    return (
        <div className="SkilsContent" id="Skils">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 10 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.8 }}
                style={{
                    marginTop: '0vh',
                    marginLeft: '40vh',
                    position: 'relative',
                    transform: 'rotate(90deg)'  // Rotaciona o texto em 90 graus
                }}
                className="w-[386px] h-[210px] origin-top-left
    text-center text-white text-[150px] font-bold font-['Inria Sans']"
            >
                <span id="titleSkils"  style={{ marginLeft: '-15vh', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SKILS.</span>
            </motion.div>
            <GridImages></GridImages>
        </div>
    );
}