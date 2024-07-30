import styled from 'styled-components';
import Background1 from '../../assets/bg-image2.svg';

export const Container = styled.div `
    background: url("${Background1}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
    justify-content: space-between;
`;

export const MainImage = styled.img `
    margin-top: 5%;
    height: auto;
    max-width: 463px;
    width: 80%;
`;

export const ContainerItems = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 61px 61px 0 0;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    padding: 35px;
    height: 69%;
    width: 45%;
    min-height: 55vh;
`;

export const H1 = styled.h1 `
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #EAE7E9;
    margin: 10px 0 40px 0;
`;

export const UserList = styled.ul `
    width: 100%;
`;

export const UserBox = styled.div `
    display: flex;
    font-size: 24px;
    font-weight: 400;
    border-radius: 10px;
    border: solid 2px #fff;
    background: none;
    color: #EAE7E9;
    box-shadow: #00000040 0 4px 0;
    margin-bottom: 20px;
    min-height: 175px;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 3%;
    gap: 10%;
`;

export const UserInfo = styled.p `
    max-width: 40%;
    font-size: 25px;
    text-align: center;
    padding: 5%;
`;

export const TrashCanButton = styled.button `
    border: none;
    background: none;
    cursor: pointer;
`;

export const TrashCanImg = styled.img ``;

export const ButtonBack = styled.button `
    text-decoration: none;
    display: flex;
    font-size: 24px;
    font-weight: 400;
    border: solid 2px #fff;
    border-radius: 25px;
    background: none;
    color: #EAE7E9;
    box-shadow: #00000040 0 4px 0;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    height: 50px;
    width: 200px;
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out, border 0.1s ease-in-out;

    &:hover {
        background-color: #000000CC;
        border: none;
        opacity: 1;
    }
    &:active {
        transform: scale(0.9);
    }
`;

export const ArrowLImg = styled.img ``;