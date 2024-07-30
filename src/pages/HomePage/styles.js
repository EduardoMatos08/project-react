import styled from 'styled-components';
import Background1 from '../../assets/bg-image1.svg';

export const Container = styled.div `
    background: url("${Background1}");
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 40px;
    justify-content: flex-end;
    height: 100%;
    min-height: 100vh;
`;

export const MainImage = styled.img `
    height: auto;
    width: 40%;
    min-width: 275px;
    max-width: 400px;
`;

export const ContainerItems = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 61px 61px 0 0;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    padding: 43px;
    height: 63%;
    width: 45%;
    min-width: 50vh;
`;

export const H1 = styled.h1 `
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #EAE7E9;
    margin: 10px 0 40px 0;
`;

export const DivInput = styled.div `
    width: 80%;
`;

export const InputLabel = styled.p `
    margin-left: 10px;
    color: #EAE7E9;
    font-weight: 600;
    font-size: 18px;
`;

export const Input = styled.input `
    font-size: 25px;
    font-weight: 500;
    padding: 7px;
    border-radius: 10px;
    border: none;
    background-color: #FFFFFF40;
    color: #EAE7E9;
    box-shadow: #00000040 0 4px 0;
    margin-bottom: 20px;
    outline: none;
    width: 95%;
    height: 60px;

    &::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
`;

export const Button = styled.button `
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0 20px 0;
    color: #fff;
    background-color: #000000CC;
    font-size: 22px;
    font-weight: 700;
    height: 50px;
    width: 200px;
    border: none;
    border-radius: 25px;
    box-shadow: #00000050 0 4px 0;
    cursor: pointer;
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out, border 0.1s ease-in-out;

    &:hover {
        background: none;
        border: solid 2px #fff;
    }
    &:active {
        transform: scale(0.9);
    }
`;

export const ArrowImg = styled.img ``;