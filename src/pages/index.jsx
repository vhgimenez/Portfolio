import { React, useState, useEffect } from "react";
import { Container } from "./styles";
import { Button } from "../components/button/index";
import path from 'path-browserify'
import { Slider } from "../components/Slider";
import MyLogo from "../../assets/logo.png";
import Seta from "../../assets/seta.gif";
import Codigo from "../../assets/codigo.jpeg";
import Barras from "../../assets/barras2.png";
import Boneco from "../../assets/boneco.png";
import Projetos from "../../assets/projetos.png";
import Tecnologia from "../../assets/tecnologia.png";
import html from "../../assets/logohtml.png";
import css from "../../assets/logocss.png";
import js from "../../assets/logojs.png";
import node from "../../assets/logonode.png";
import react from "../../assets/logoreact.png";
import python from "../../assets/logopython.png";
import c from "../../assets/logoc.png";
import php from "../../assets/logophp.png";
import Deslizar from "../../assets/deslizar.png";
import LogoEmail from "../../assets/logoemail.png";
import LogoLinkedin from "../../assets/logolinkedin.png";
import LogoGitHub from "../../assets/logogithub.png";
import LogoWpp from "../../assets/wpplogo.png";
import LogoInsta from "../../assets/logoinstagram.png";
import SetaCima from "../../assets/setacima.gif";
import SetaCima2 from "../../assets/setacima2.gif";

export function Page() {
    const [mounted,setMounted] = useState(false)
    
    
    useEffect(() => {
        
        if(mounted){
            const technologys = document.querySelectorAll(".Technology");
            const imageTechnology = document.querySelector(".ImageSelected");
            const DivSelectedTechnology = document.querySelector(".SelectedTechnology");
            const divDescription = document.querySelector("#Description");
            const divProjectsArea = document.querySelector(".ProjectsArea");
            const divSelectionTechnology = document.querySelector(".SelectionTechnology");
            const observer = new IntersectionObserver(handleIntersection);
            const MenuMobile = document.querySelector(".MenuMobile");
            const Bars = document.querySelector(".Bars");

            Bars.addEventListener("click", function() {
              if(!MenuMobile.classList.contains("onmobile")) {
                setTimeout(function() {
                }, 500);
                MenuMobile.classList.add("onmobile");
                MenuMobile.style.animation = "topdownmobile linear .5s";
              }
              else {
                MenuMobile.style.animation = "none";
                MenuMobile.style.animation = "downtopmobile linear .5s";
                setTimeout(function() {
                  MenuMobile.classList.remove("onmobile");
                }, 500);
              }
            })

            
            function handleIntersection(entries, observer) {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.style.opacity = "1";
                }
                else {
                  entry.target.style.opacity = "0";
                }
              });
            }

            observer.observe(divDescription);
            observer.observe(divProjectsArea);
            observer.observe(divSelectionTechnology);

            technologys.forEach((technology) => {
                technology.addEventListener('click', () => {
                  RemoveSelected();
                  technology.classList.add("selected");
          
                  DivSelectedTechnology.classList.add('animated');
                  setTimeout(function() {
                    DivSelectedTechnology.classList.remove('animated');
                  }, 1000);
          
                  handleImageSelected(technology);
                  handleDescription(technology);
                })
              });
          
              function RemoveSelected() {
                technologys.forEach((technology) => {
                    if(technology.classList.contains("selected")) {
                        technology.classList.remove("selected");
                    }
                });
          
            }

            function handleImageSelected(technology) {
                const idTechnology = technology.attributes.id.value;
                //imageTechnology.src = `/assets/logo${idTechnology}.png`;

                const imagensTec = {
                  "node": node,
                  "js": js,
                  "html": html,
                  "css": css,
                  "python": python,
                  "react": react,
                  "php": php,
                  "c": c
                }
                imageTechnology.src = imagensTec[idTechnology];
                
                



            }
          
            function handleDescription(technology) {
                const technologyDescription = document.querySelector(".TechnologyDescription");
                technologyDescription.innerText = technology.getAttribute("data-description");
            }
        }

        else{
            setMounted(true);
        }

  },[mounted])


  return (
    <Container>
    <div className="MenuNavigation">
    <header>
      <a href="#"><img src={MyLogo}></img></a>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#AboutMe">Sobre</a></li>
          <li><a href="#Skills">Habilidades</a></li>
          <li><a href="#Projects">Projetos</a></li>
        </ul>
        <a href="https://wa.me/message/ADVPLDIFI2AUB1" target="_blank"><Button title="Contato" /></a>
        <div className="Bars">
          <img src={Barras}></img>
        </div>
      </nav>
    </header></div>
    <div className="MenuMobile">
      <ul className="MobileList">
        <li><a href="#">Home</a></li>
        <li><a href="#AboutMe">Sobre</a></li>
        <li><a href="#Skills">Habilidades</a></li>
        <li><a href="#Projects">Projetos</a></li>
      </ul>
    </div>
    <main>
      <div className="Infos">
        <h1>Olá, eu me chamo Victor Gimenez</h1>
        <h3>Desenvolvedor Full-Stack</h3>
        <a href="#AboutMe"><button>Sobre Mim <img src={Seta}></img></button></a>
      </div>
      <div className="ImageContent">
        <img src={Codigo}></img>
      </div>
    </main>
    <div id="AboutMe">
      <div className="TitleDivAboutMe">
        <h1>SOBRE MIM</h1>
      </div>
      <div id="Description">
        <div className="Presentation">
          <img src={Boneco}></img>
          <p>Prazer, me chamo Victor Gimenez, tenho 19 anos e sou um entusiasta de Tecnologia da Informação, formado em Informática pela Escola e Faculdade Fortec 
            e estudo Ciência da Computação na Universidade Paulista, atualmente estou no 4º semestre da faculdade.</p>
        </div>
        <div className="Experience">
          <p>Participei de projetos acadêmicos que me permitiram aplicar meus conhecimentos teóricos em situações reais, 
            o que me ajudou a desenvolver minhas habilidades de resolução de problemas e trabalho em equipe. Também 
            realizei cursos de especialização em diversas áreas da TI, incluindo programação em Python e desenvolvimento web.</p>
          <img src={Projetos}></img>
        </div>
        <div className="Closure">
          <img src={Tecnologia}></img>
          <p>Estou sempre buscando aprender mais e me atualizar sobre as novas
            tecnologias e tendências do mercado de TI. Tenho uma grande paixão por desenvolver soluções criativas e 
            eficientes para resolver problemas reais, e estou ansioso para iniciar minha carreira profissional na área.</p>
        </div>
      </div>
    </div>
    <div id="Skills">
      <div className="TitleDivSkills">
        <h1>HABILIDADES</h1>
      </div>
      <div className="SelectionTechnology">
        <div className="Selection">
          <h1>Selecione uma Tecnologia</h1><hr/>
          <div className="FirstSelection">
            <ul>
            <li className="Technology selected" id="html" data-description="HTML5 é a quinta e última versão do HTML, sigla de Hypertext Markup Language, uma das primeiras e principais linguagens de marcação da web. O HTML serve, basicamente, para o desenvolvimento de páginas que contenham conteúdos simples, como textos, imagens, áudio, vídeos e etc.">
            <img src={html}></img></li>
            <li className="Technology" id="css" data-description="Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.">
            <img src={css}></img></li>
            <li className="Technology" id="js" data-description="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.">
            <img src={js}></img></li>
            <li className="Technology" id="node" data-description="Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.">
            <img src={node}></img></li></ul>
          </div>
          <div className="SecondSelection">
          <ul>
          <li className="Technology" id="react" data-description="React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.">
          <img src={react}></img></li>
          <li className="Technology" id="python" data-description="Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.">
          <img src={python}></img></li>
          <li className="Technology" id="c" data-description="C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.">
          <img src={c}></img></li>
          <li className="Technology" id="php" data-description="PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web. ">
          <img src={php}></img></li></ul>
          </div>
        </div>
        <div className="SelectedTechnology">
        <img src={html} className="ImageSelected"></img><hr/>
        <p className="TechnologyDescription">HTML5 é a quinta e última versão do HTML, sigla de Hypertext Markup Language, uma das primeiras
           e principais linguagens de marcação da web. O HTML serve, basicamente, para o desenvolvimento de 
           páginas que contenham conteúdos simples, como textos, imagens, áudio, vídeos e etc.</p>
        </div>
      </div>
    </div>
    <div id="Projects">
      <div className="TitleDivProjects">
        <h1>PROJETOS</h1>
      </div>
      <div className="ProjectsArea">
        <div className="Tip">
          <p>Deslize para navegar</p>
          <img src={Deslizar}></img>
        </div>
        <Slider></Slider>
      </div>
    </div>
    <footer>
      <div className="Up">
        <a href="#"><img src={SetaCima}></img></a>
      </div>
      <div className="AdditionalData">
        <div className="Data">
        <h3>Victor Gimenez</h3>
        <p>Desenvolvedor Full-Stack</p>
        <div className="Email">
        <img src={LogoEmail}></img><p>impressaogimenez@gmail.com</p>
        </div></div>
        <div className="UpMobile">
        <a href="#"><img src={SetaCima2}></img></a>
        </div>
      </div>
      <div className="Networks">
        <a href="https://www.linkedin.com/in/victor-gimenez-5b486a240/" target="_blank"><img src={LogoLinkedin}></img></a>
        <a href="https://github.com/vhgimenez" target="_blank"><img src={LogoGitHub}></img></a>
        <a href="https://wa.me/message/ADVPLDIFI2AUB1" target="_blank"><img src={LogoWpp}></img></a>
        <a href="https://instagram.com/vh_gimenez?igshid=MjEwN2IyYWYwYw==" target="_blank"><img src={LogoInsta}></img></a>
      </div>
      <div className="Rights">
        <hr/>
        <p>©️ Victor Gimenez</p>
      </div>
    </footer>
    </Container>
  )
}