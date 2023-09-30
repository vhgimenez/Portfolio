import styled from "styled-components";

export const Container = styled.div`

    font-family: "Raleway";
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8rem;

    .inner {
        display: flex;
        gap: 3rem;
    }

    .card-slider {
        background-color: white;
        border-radius: 2.5rem;
        padding: 1.5rem;
    }

    .item {
        min-width: 18rem;
    }

    .item img {
        width: 100%;
        height: 12rem;
        border-radius: 1.2rem;
        pointer-events: none;
        border: 0.5rem solid #3533CD;
    }

    h2 {
        margin-top: 1rem;
        font-weight: 400;
        text-align: center;
    }

    p {
        margin-top: .5rem;
        text-align: center;
        color: #3533CD;
    }

    .buttons {
        text-align: center;
    }

    .buttons Button {
        color: white;
    }

    .btnProject {
        margin-top: .5rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
    }

`;