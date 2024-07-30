import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import UsersImg from './../../assets/users.svg';
import ArrowLeft from './../../assets/arrow-left.svg';
import TrashCan from './../../assets/trash-can.svg';
import {
  Container,
  MainImage,
  ContainerItems,
  H1,
  UserList,
  UserBox,
  UserInfo,
  TrashCanButton,
  TrashCanImg,
  ButtonBack,
  ArrowLImg
} from './styles.js';

export default function UsersPage() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  };

  // Hooks - useState - useRef - useEffect

  useEffect(() => {
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3002/users");
      setUsers(newUsers);
    }
    fetchUsers()
  }, [])

  // Estado == Monitora a Alteração de Variável == Imutável //

  async function deleteUser(UserId) {

    await axios.delete(`http://localhost:3002/users/${UserId}`)

    const newUsers = users.filter(user => user.id !== UserId)
    setUsers(newUsers)

    return

  }

  return(
    <Container>
      <MainImage alt="bubble-users" src={UsersImg}></MainImage>

      <ContainerItems>
        <H1>Welcome!</H1>

        <UserList>
          {users.map((user) => (
            <UserBox key={user.id}><UserInfo>{user.name}</UserInfo> <UserInfo>Age: {user.age}</UserInfo><TrashCanButton onClick={() => {deleteUser(user.id)}}><TrashCanImg alt="trash-can" src={TrashCan}></TrashCanImg></TrashCanButton></UserBox>
          ))}
        </UserList>
        <ButtonBack onClick={ goBack }>Return<ArrowLImg alt="seta-para-esquerda" src={ArrowLeft}></ArrowLImg></ButtonBack>
        
      </ContainerItems>
    </Container>
  )

};