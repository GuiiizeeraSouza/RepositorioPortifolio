'use client';

import { motion } from "framer-motion";

const animationProps = {
    initial: { opacity: 0, y: -10 },
    whileInView: { opacity: 4, y: 5 },
    exit: { opacity: 4, y: 10 },
    transition: { duration: 1.0 }
};

const animationProps2 = {
    initial: { opacity: 0, y: -10 },
    whileInView: { opacity: 4, y: 5 },
    exit: { opacity: 4, y: 10 },
    transition: { duration: 1.5 }
};

const animationProps3 = {
    initial: { opacity: 0, y: -10 },
    whileInView: { opacity: 4, y: 5 },
    exit: { opacity: 9, y: 10 },
    transition: { duration: 2.0 }
};

const animationProps4 = {
    initial: { opacity: 0, y: -10 },
    whileInView: { opacity: 4, y: 5 },
    exit: { opacity: 4, y: 10 },
    transition: { duration: 2.8 }
};

export default function GridImages() {
    return (
        <div className="skils" style={{ width: '100%', height: '100%', marginLeft: '-20vh', position: 'relative', display: 'grid' }}>

            <motion.div {...animationProps} className="item">
                <img src="/React_(web_framework)-Logo.wine.png" />
            </motion.div>
            <motion.div {...animationProps} className="item">
                <img src="/Vue.png" />
            </motion.div>
            <motion.div {...animationProps} className="item">
                <img src="/nextjs-icon-dark-background.png" />
            </motion.div>
            <motion.div {...animationProps} className="item">
                <img src="/logo-javascript-icon-1024.png" />
            </motion.div>
            <motion.div {...animationProps2} className="item">
                <img src="/html-5.png" />
            </motion.div>
            <motion.div {...animationProps2} className="item">
                <img src="/css-3 (1).png" />
            </motion.div>
            <motion.div {...animationProps2} className="item">
                <img src="/java.png" />
            </motion.div>
            <motion.div {...animationProps2} className="item">
                <img src="/bootstrap.png" />
            </motion.div>
            <motion.div {...animationProps3} className="item">
                <img src="/github (1).png" />
            </motion.div>
            <motion.div {...animationProps3} className="item">
                <img src="/docker.png" />
            </motion.div>
            <motion.div {...animationProps3} className="item">
                <img src="/mysql.png" />
            </motion.div>
            <motion.div {...animationProps3} className="item">
                <img src="/figma.png" />
            </motion.div>
            <motion.div {...animationProps4} className="item">
                <img src="/logo(1).png" />
            </motion.div>
            <motion.div {...animationProps4} className="item">
                <img src="/pngwing.com.png" />
            </motion.div>
            <motion.div {...animationProps4} className="item">
                <img src="/icon-green.png" />
            </motion.div>
            <motion.div {...animationProps4} className="item">
                <img src="/python.png" />
            </motion.div>
        </div>
    );
}