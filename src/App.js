import React from 'react';

import People from './assets/people.svg'
import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  DivInput
} from './styles.js';

export default function App() {

  return(
    <Container>
      <Image alt="people-talking" src={People}></Image>

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

        <Button>Cadastrar</Button>
      </ContainerItems>
    </Container>
  )

}