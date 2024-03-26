import React from 'react';

import People from './assets/people.svg'
import ArrowRight from './assets/arrow-right.svg'
import {
  Container,
  MainImage,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  DivInput,
  ArrowImg
} from './styles.js';

export default function App() {

  return(
    <Container>
      <MainImage alt="people-talking" src={People}></MainImage>

      <ContainerItems>
        <H1>Olá!</H1>

        <DivInput>
          <InputLabel>Nome</InputLabel>
          <Input placeholder='Nome completo...'></Input>
        </DivInput>

        <DivInput>
          <InputLabel>Idade</InputLabel>
          <Input placeholder='Idade...'></Input>
        </DivInput>

        <Button>Cadastrar<ArrowImg alt="seta-para-direita" src={ArrowRight}></ArrowImg></Button>
      </ContainerItems>
    </Container>
  )

}