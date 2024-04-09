import React from 'react';
import { useState, useRef } from 'react';

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

  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()

  // Hooks - UseState - UseRef

  function addUser() {
    setUsers([...users, {id: Math.random(), name: inputName.current.value, age: inputAge.current.value}])
  }

  // Estado == Monitora a Alteração de Variável == Imutável //

  function deleteUser(UserId) {
    const newUsers = users.filter(user => user.id !== UserId)
    setUsers(newUsers)
  }

  return(
    <Container>
      <MainImage alt="people-talking" src={People}></MainImage>

      <ContainerItems>
        <H1>Olá!</H1>

        <DivInput>
          <InputLabel>Nome</InputLabel>
          <Input ref={inputName} placeholder='Nome completo...' type="text"></Input>
        </DivInput>

        <DivInput>
          <InputLabel>Idade</InputLabel>
          <Input ref={inputAge} placeholder='Idade...' type="number"></Input>
        </DivInput>

        <Button onClick={addUser}>Cadastrar<ArrowImg alt="seta-para-direita" src={ArrowRight}></ArrowImg></Button>

        <ul>
          {users.map((user) => (
            <UserBox key={user.id}><UserInfo>{user.name}</UserInfo> <UserInfo>{user.age} Anos</UserInfo><TrashCanButton onClick={() => {deleteUser(user.id)}}><TrashCanImg alt="trash-can" src={TrashCan}></TrashCanImg></TrashCanButton></UserBox>
          ))}
        </ul>
        <ButtonBack>Voltar<ArrowLImg alt="seta-para-esquerda" src={ArrowLeft}></ArrowLImg></ButtonBack>
        
      </ContainerItems>
    </Container>
  )

}