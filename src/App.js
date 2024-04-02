import React from 'react';

import People from './assets/people.svg'
import ArrowRight from './assets/arrow-right.svg'
import ArrowLeft from './assets/arrow-left.svg'
import TrashCan from './assets/trash-can.svg'
import {
  Container,
  MainImage,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  DivInput,
  ArrowImg,
  UserBox,
  UserInfo,
  TrashCanButton,
  TrashCanImg,
  ButtonBack,
  ArrowLImg
} from './styles.js';

export default function App() {

  const users = [
    { id: Math.random(), name: "Eduardo", age: 15 },
    { id: Math.random(), name: "Nadia", age: 39 },

  ]

  return(
    <Container>
      <MainImage alt="people-talking" src={People}></MainImage>

      <ContainerItems>
        <H1>Olá!</H1>

        <DivInput>
          <InputLabel>Nome</InputLabel>
          <Input placeholder='Nome completo...' type="text"></Input>
        </DivInput>

        <DivInput>
          <InputLabel>Idade</InputLabel>
          <Input placeholder='Idade...' type="number"></Input>
        </DivInput>

        <Button>Cadastrar<ArrowImg alt="seta-para-direita" src={ArrowRight}></ArrowImg></Button>

        <ul>
          {users.map((user) => (
            <UserBox key={user.id}><UserInfo>{user.name}</UserInfo> <UserInfo>{user.age} Anos</UserInfo><TrashCanButton><TrashCanImg alt="trash-can" src={TrashCan}></TrashCanImg></TrashCanButton></UserBox>
          ))}
        </ul>
        <ButtonBack>Voltar<ArrowLImg alt="seta-para-esquerda" src={ArrowLeft}></ArrowLImg></ButtonBack>
        
      </ContainerItems>
    </Container>
  )

}