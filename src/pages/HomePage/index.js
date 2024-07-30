import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import People from './../../assets/people.svg'
import ArrowRight from './../../assets/arrow-right.svg'
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
} from './styles.js';

export default function App() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef()
  const inputAge = useRef()
  
  // Hooks - useState - useRef - useEffect

  async function addUser() {

    const { data: user } = await axios.post("http://localhost:3002/users", {
      name: inputName.current.value,
      age: inputAge.current.value

    })

    setUsers([ ...users, user ])

    navigate('/users')

    console.log("Novo Usuário:", {user}) 
    console.log("Usuários:", {users})
  }

  // Estado == Monitora a Alteração de Variável == Imutável //

  return(
    <Container>
      <MainImage alt="people-talking" src={People}></MainImage>

      <ContainerItems>
        <H1>Hello!</H1>

        <DivInput>
          <InputLabel>NAME</InputLabel>
          <Input ref={inputName} placeholder='type your complete name' type="text"></Input>
        </DivInput>

        <DivInput>
          <InputLabel>AGE</InputLabel>
          <Input ref={inputAge} placeholder='type your age' type="number"></Input>
        </DivInput>

        <Button onClick={ addUser }>Sign in<ArrowImg alt="seta-para-direita" src={ArrowRight}></ArrowImg></Button>
        
      </ContainerItems>
    </Container>
  )

}