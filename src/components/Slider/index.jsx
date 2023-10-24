import { React, useEffect, useState, useRef } from 'react';
import { Container } from './styles';
import { Button } from '../button';
import { motion } from 'framer-motion';

import image1 from "../../../assets/projeto1.png";
import image2 from "../../../assets/projeto2.png";
import image3 from "../../../assets/projeto3.png";
import image4 from "../../../assets/construcao.png";

const images = [image1, image2, image3, image4, image4, image4];
const titles = ["Projeto com Figma", "Hacktudo OLX", "Weather API", "Em Construção", "Em Construção", "Em Construção"];
const subtitle = ["HTML - CSS", "React - Node.js", "Javascript", "Em Breve", "Em Breve", "Em Breve"];
const buttonAcess = ["Acessar", "Acessar", "Acessar"];
const linksAcess = ["https://landing-page-figma-sepia.vercel.app/", "https://hack-tudo.vercel.app/", "https://weather-api-nu-peach.vercel.app/"];
const linkGitHub = ["https://github.com/vhgimenez"];

export function Slider() {

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <Container>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div className='inner' drag="x" dragConstraints={{ right: 0, left: -width}}>
                        {images.map((image, index) => (
                            <motion.div className='card-slider' key={index}>
                            <motion.div className='item'>
                                <img src={image} alt={`Image ${index}`}></img>
                            </motion.div>
                                <h2>{titles[index]}</h2>
                                <p>{subtitle[index]}</p>
                            <motion.div className='buttons'>
                                {buttonAcess[index] === undefined ? (
                                    <a href={linkGitHub} target='_blank'><Button title="GitHub"></Button></a>
                                ) : (
                                    <div className='btnProject'>
                                        <a href={linksAcess[index]} target='_blank'><Button title={buttonAcess[index]}></Button></a>
                                        <a href={linkGitHub} target='_blank'><Button title="GitHub"></Button></a>
                                    </div>
                                )}
                            </motion.div>
                            </motion.div>
                        ))}
                </motion.div>
            </motion.div>
        </Container>
    )
}