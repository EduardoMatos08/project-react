import styled from 'styled-components';
import Background1 from './assets/bg-image1.svg';

export const Container = styled.div `
    background: url("${Background1}");
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 40px;
`;

export const MainImage = styled.img `
    margin-top: 17px;
    height: auto;
    width: 30vw;
`;

export const ContainerItems = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 61px 61px 0 0;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    padding: 40px 36px;
    height: 60vh;
    width: 50vw;
`;

export const H1 = styled.h1 `
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #EAE7E9;
    margin: 10px 0 40px 0;
`;

export const DivInput = styled.div ``;

export const InputLabel = styled.p `
    color: #EAE7E9;
    font-weight: 600;
    font-size: 18px;
`;

export const Input = styled.input `
    font-size: 24px;
    font-weight: 400;
    padding: 7px;
    border-radius: 10px;
    border: none;
    background-color: #FFFFFF40;
    color: #EAE7E9;
    box-shadow: #00000040 0 4px 0;
    margin-bottom: 20px;
    outline: none;
    width: 25vw;
`;

export const Button = styled.button `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    color: #fff;
    background-color: #000000CC;
    font-size: 22px;
    font-weight: 700;
    height: 7vh;
    width: 15vw;
    border: none;
    border-radius: 25px;
    box-shadow: #00000050 0 4px 0;
    cursor: pointer;
`;

export const ArrowImg = styled.img `

`;