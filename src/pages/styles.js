import styled from 'styled-components';

export const Container = styled.div`
    
header {
    width: 100%;
    padding: .5rem 7rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    animation: topdown 1.5s;
    position: fixed;
    top: 0;
    background-color: black;
    z-index: 2;
}

header img {
    width: 4.0rem;
    height: 4.0rem;
    cursor: pointer;
    transition: transform .3s;
}

header img:hover {
    transform: scale(1.05);
}

nav {
    display: flex;
    align-items: center;
    position: relative;
}

nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin-right: 2rem;
}

nav ul a:hover {
    color: #3533CD;
}

nav img {
    width: 3rem;
    height: 3rem;
    opacity: 0;
    visibility: hidden;
    display: none;
}

.Bars {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.MenuMobile {
    padding: .8rem 0;
    margin-top: -4.75rem;
    position: fixed;
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    animation: none;
    opacity: 0;
    visibility: hidden;
    display: block;
}

.onmobile {
    display: flex;
    opacity: 1;
    visibility: visible;
    animation: topdownmobile linear .5s;
}

.notvisible {
    opacity: 0;
    visibility: hidden;
    display: none;
}

.MobileList {
    list-style: none;
    display: block;
}

.MobileList a:hover {
    color: #3533CD;
}

.MobileList li {
    margin-bottom: .5rem;
    font-size: .9rem;
}

main {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 9rem;
    height: 37rem;
    width: 100%;
}

main .Infos h1 {
    margin-top: 6rem;
    width: 27rem;
    font-family: "Raleway";
    font-weight: 600;
    color: #3533CD;
    font-size: 2.7rem;
    animation: topdown 1.5s;
}

main .Infos h3 {
    margin-bottom: 1.5rem;
    width: 14.2rem;
    font-family: "Raleway";
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
    border-right: .2rem solid rgb(209, 209, 209);
    white-space: nowrap;
    overflow: hidden;
    animation: blinkCursor 700ms steps(40) infinite normal,
        typing 2.5s steps(40) 1s normal both;
}

main .ImageContent img {
    top: 0;
    margin-top: 3rem;
    cursor: pointer;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    animation: position 3s linear infinite;
}

main button {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: .3rem;
    background-color: #3533CD;
    color: white;
    border-radius: 1rem;
    width: 8rem;
    padding: .5rem;
    border: none;
    cursor: pointer;
    transition: background-color transform .3s;
    animation: leftright 1.5s;
}

main button img {
    width: 1rem;
    height: 1rem;
}

main button:hover {
    background-color: #3933CD;
    transform: scale(1.2);
}

main Button img {
    width: 1rem;
    height: 1rem;
}

#AboutMe {
    padding: 3rem 0 6rem;
    background-color: #0c0d02;
    align-items: center;
    text-align: center;
    width: 100%;
}

.TitleDivAboutMe h1,
.TitleDivSkills h1,
.TitleDivProjects h1 {
    font-family: "Raleway";
    font-weight: 600;
    color: #3533CD;
    font-size: 2.7rem;
    margin-bottom: 4rem;
    letter-spacing: .6rem;
}

#Description {
    opacity: 0;
    transition: opacity 3s;
}

#Description p {
    padding: 1.5rem;
    background-color: #3533CD;
    border-radius: 2rem;
    width: 25rem;
    text-align: center;
    font-family: "Raleway";
    font-weight: 400;
    font-size: .9rem;
    color: white;
}

#Description img {
    width: 10rem;
    height: 10rem;
    background-color: black;
    border-radius: 10rem;
    transition: transform .6s;
}

#Description img:hover {
    transform: rotate(360deg);
}

.Presentation, .Experience, .Closure {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20rem;
}

.Presentation, .Experience {
    margin-bottom: 5rem;
}

#Skills {
    background-color: black;
    padding: 3rem 0 6rem;
    width: 100%;
    align-items: center;
    text-align: center;
}

.SelectionTechnology {
    width: 100%;
    gap: 7rem;
    opacity: 0;
    transition: opacity 3s;
}

.SelectionTechnology,
.FirstSelection,
.SecondSelection {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; 
}

.FirstSelection,
.SecondSelection {
    gap: 2rem;
}

.selected {
    filter: brightness(0.5);
}

.animated {
    animation: topdown .6s;
}

.FirstSelection {
    margin-bottom: 2rem;
}

ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.Selection img {
    width: 5rem;
    height: 5rem;
    transition: transform .4s;
}

.Selection img:hover {
    transform: scale(1.1);
    cursor: pointer;
}

.Selection h1 {
    font-family: "Raleway";
    font-weight: 600;
    color: white;
    font-size: 1.6rem;
    text-transform: uppercase;
}

.Selection hr {
    width: 30rem;
    border: 0.09rem solid #3533CD;
    margin-bottom: 2rem;
}

.SelectedTechnology {
    width: 30rem;
}

.SelectedTechnology img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 2rem;
    animation: topdown 2s;
    transition: animation .3s;
}

.SelectedTechnology hr {
    border: 0.09rem solid #3533CD;
    margin-bottom: 1rem;
}

.SelectedTechnology p {
    height: 8rem;
    font-family: "Raleway";
    font-size: 1.2rem;
    font-weight: 300;
    color: white;
}

#Projects {
    background-color: #0c0d02;
    padding: 3rem 0 6rem;
    width: 100%;
    align-items: center;
    text-align: center;
}

.ProjectsArea {
    opacity: 0;
    transition: opacity 3s;
}

.slide-container {
    max-width: 112rem;
    width: 100%;
}

.slide-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-wrapper {
    display: flex;
    gap: 5rem;
}

.card {
    width: 21rem;
    height: 29rem;
    border-radius: 2.5rem;
    background-color: white;
}

.image-content,
.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.4rem;
}

.image-content {
    position: relative;
    row-gap: .5rem;
    padding: 1rem 1.4rem;
}

.overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #3533CD;
    border-radius: 2.5rem 2.5rem 0 2.5rem;
}

.overlay::before,
.overlay::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -4rem;
    height: 4rem;
    width: 4rem;
    background-color: #3533CD;
}

.overlay::after {
    border-radius: 0 2.5rem 0 0;
    background-color: white;
}

.card-image {
    position: relative;
    height: 12rem;
    width: 18rem;
    border-radius: 1.5rem;
    background: white;
    padding: .3rem;
}

.card-image .card-img {
    cursor: pointer;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
    border: .4rem solid #3533CD;
    transition: transform .3s;
}

.card-image .card-img:hover {
    transform: scale(1.1);
}

.name {
    font-family: "Raleway";
    font-size: 1.5rem;
    font-weight: 400;
    color: #333;
}

.description {
    margin-top: .9rem;
    font-family: "Raleway";
    font-size: .9rem;
    font-weight: 300;
    color: #707070;
}

.slide-container Button {
    margin: 1.4rem
}

#card-wrapper-two {
    margin-top: 3rem;
}

.buttons-card {
    display: flex;
}

footer {
    background-color: black;
    font-family: "Raleway";
    width: 70rem;
    margin: 0 auto;
}

.AdditionalData h3 {
    color: white;
}

footer p {
    color: #3533CD;
}

.AdditionalData .UpMobile img {
    opacity: 0;
    visibility: hidden;
    display: none;
}

.AdditionalData img {
    width: 1rem;
    height: 1rem;
}

.Email {
    display: flex;
    align-items: center;
    gap: .3rem;
    margin-bottom: 2rem;
}

.Networks {
    display: flex;
    gap: .3rem;
}

footer .Networks img,
.Up img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    margin-bottom: .5rem;
    transition: transform .4s;
}

.Networks img:hover {
    transform: scale(1.2);
}

.Up {
    text-align: right;
    margin-right: 1rem;
}

.Up img {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    padding: .5rem;
    margin-top: -1.6rem;
    background-color: #3533CD;
    transition: transform .3s;
}

.Up img:hover {
    transform: scale(1.1);
}

.Rights hr {
    margin: 0 auto;
    width: 20rem;
}

.Rights p {
    margin: 1rem 0;
    text-align: center;
}



@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 14.5rem;
    }
}

@keyframes typingmobile {
    from {
        width: 0;
    }
    to {
        width: 13.3rem;
    }
}

@keyframes blinkCursor {
    from {
        border-right-color: rgb(209, 209, 209);
    }
    to {
        border-right-color: transparent;
    }
}

@keyframes topdown {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes topdownmobile {
  0% {
    opacity: 1;
    transform: translateY(-150px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes downtopmobile {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 1;
    transform: translateY(-150px);
  }
}

@keyframes leftright {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes position {
    0% {
        margin-top: 1rem;
    }

    25% {
        margin-top: 3rem;
    }

    50% {
        margin-top: 5rem;
    }

    75% {
        margin-top: 3rem;
    }

    100% {
        margin-top: 1rem;
    }
}

@keyframes positionmobile {
    0% {
        margin-top: 1rem;
    }

    25% {
        margin-top: 5rem;
    }

    50% {
        margin-top: 9rem;
    }

    75% {
        margin-top: 5rem;
    }

    100% {
        margin-top: 1rem;
    }
}

@media screen and (max-width: 800px) {
    header {
        padding: .5rem 1rem;
    }

    header img {
        width: 3rem;
        height: 3rem;
    }
    
    nav ul,
    nav button {
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    nav img {
        margin-top: -.5rem;
        opacity: 1;
        visibility: visible;
        display: flex;
    }

    main {
        padding: 0 1rem;
        gap: 1rem;
    }

    main .Infos h1 {
        width: 19rem;
        font-size: 2rem;
    }

    main .Infos h3 {
        font-size: 1.1rem;
        animation: blinkCursor 700ms steps(40) infinite normal,
        typingmobile 2.5s steps(40) 1s normal both;
    }

    main .ImageContent img {
        width: 8rem;
        height: 8rem;
        animation: positionmobile 4s linear infinite;
    }

    main button {
        width: 6rem;
        font-size: .7rem;
    }

    main button img {
        width: .7rem;
        height: .7rem;
    }

    .TitleDivAboutMe h1,
    .TitleDivSkills h1,
    .TitleDivProjects h1 {
        font-size: 2rem;
    }

    #Description {
        padding: 0 1rem;
    }

    .Presentation, .Experience, .Closure {
        gap: 2rem;
    }

    #Description img {
        width: 7rem;
        height: 7rem;
    }

    #Description p {
        font-size: .7rem;
        padding: 1rem;
    }

    #Skills {
        padding: 2 1rem;
    }

    .SelectionTechnology {
        display: block;
    }

    .Selection {
        margin-bottom: 3rem;
    }

    .Selection h1 {
        font-size: 1.4rem;
    }

    .Selection hr,
    .SelectedTechnology hr {
        width: 25rem;
        margin: 0 auto 1rem;
    }

    .Selection img {
        width: 4rem;
        height: 4rem;
    }

    .SelectedTechnology img {
        width: 7rem;
        height: 7rem;
    }

    .SelectedTechnology p {
        margin: 0 auto;
        width: 25rem;
        font-size: 1rem;
    }

    .card-wrapper {
        display: block;
    }

    .card + .card {
        margin-top: 2rem;
    }

    .card {
        width: 17rem;
        height: 25rem;
    }

    .card-image {
        width: 15rem;
        height: 10rem;
    }

    .name {
        font-size: 1.2rem;
        z-index: 1;
    }

    .description {
        font-size: .7rem;
        z-index: 1;
    }

    .card Button {
        width: 5rem;
        font-size: .8rem;
    }

    .nomobile {
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    footer {
        width: 100%;
        padding: 0 1rem;
    }

    .Up {
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    .AdditionalData {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .AdditionalData h3 {
        font-size: 1rem;
    }

    footer p {
        font-size: .7rem;
    }

    .AdditionalData img {
        width: .7rem;
        height: .7rem;
    }

    .AdditionalData .UpMobile img {
        margin-top: -1.5rem;
        opacity: 1;
        visibility: visible;
        display: flex;
        background-color: #3533CD;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        padding: .2rem;
    }

    footer .Networks img {
        width: 1.5rem;
        height: 1.5rem;
    }
}
`;