import React, { useState, useEffect } from "react";
import axios from "axios";

import H1 from '../../components/Title' 
import ContainerItems from '../../components/ContainerItems'
import Button from '../../components/Button'

import { Container, Image,  User } from "./styles";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);

    }
    fetchUsers();
  }, []);
  async function deleteUser(userId) {
    // console.log (userId)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
    await axios.delete(`http://localhost:3001/users/${userId}`);
  }
  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItems isBlur = {true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo"></img>
              </button>
            </User>
          ))}
          
          <Button isBack = {true} onClick={() => navigate("/")}>
            
            <img alt="seta" src={Arrow} />
            Voltar
          </Button>
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default Users;
